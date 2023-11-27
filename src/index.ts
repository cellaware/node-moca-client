
import fetch from 'node-fetch';

export class MocaConnection {

    private url: string;
    private userId: string;
    private password: string;
    private envXmlStr: string;

    constructor(url: string, userId: string, password: string) {
        this.url = url;
        this.userId = userId;
        this.password = password;
        this.envXmlStr = '';
    }

    private async sendRequest(requestBody: any) {
        if (this.url === undefined || this.url.length === 0) {
            throw new Error('Invalid URL');
        }

        const headers = { 'Content-Type': 'application/moca-xml', Accept: 'application/json', 'Response-Encoder': 'JSON' };

        const res = await fetch(this.url, {
            method: "POST",
            headers: headers,
            body: requestBody,
        });

        let body = await res.text();
        if (body.length == 0) {
            body = '{}';
        }

        return new MocaResponse(res.headers, JSON.parse(body));
    }

    async executeCommand(command: string) {

        if (command === undefined || command.length === 0) {
            command = 'noop';
        }

        let mocaRequest = this.buildMocaRequest(command);

        let mocaResponse = await this.sendRequest(mocaRequest);

        if (!mocaResponse.eOk()) {
            if (mocaResponse.status === '203' || mocaResponse.status === '301' || mocaResponse.status === '523') {
                let loginMocaResponse = await this.login();

                if (!loginMocaResponse.eOk()) {
                    throw new Error('MOCA Auto Login Error: ' + loginMocaResponse.message);
                }

                mocaResponse = await this.sendRequest(mocaRequest);
            }
        }

        return mocaResponse;
    }

    async login() {

        this.envXmlStr = '';
        let loginCommand = `login user where usr_id = '${this.userId}' and usr_pswd = '${this.password}'`;

        let mocaResponse = await this.sendRequest(this.buildMocaRequest(loginCommand));

        if (mocaResponse.eOk()) {
            let localeId = mocaResponse.results.getValue(0, 'locale_id');
            let userId = mocaResponse.results.getValue(0, 'usr_id');
            let sessionKey = mocaResponse.results.getValue(0, 'session_key');

            this.envXmlStr = `<var name="LOCALE_ID" value="${localeId}"/><var name="USR_ID" value="${userId}"/><var name="SESSION_KEY" value="${sessionKey}"/>`;
        } else {
            throw new Error(mocaResponse.message);
        }

        return mocaResponse;
    }

    async logout() {
        return this.executeCommand(`logout user where usr_id = '${this.userId}'`);
    }

    private buildMocaRequest(query: string): string {
        let escapedXmlQuery = this.escapeXml(query);

        return `
          <moca-request autocommit = "true">
              <environment>${this.envXmlStr}</environment>
              <query>${escapedXmlQuery}</query>
          </moca-request>`;
    }

    private escapeXml(str: string): string {
        let retStr = '';

        for (let i = 0; i < str.length; i++) {
            let c = str.charAt(i);

            switch (c) {
                case '"':
                    retStr += '&quot;';
                    break;
                case "'":
                    retStr += '&apos;';
                    break;
                case '&':
                    retStr += '&amp;';
                    break;
                case '<':
                    retStr += '&lt;';
                    break;
                case '>':
                    retStr += '&gt;';
                    break;
                default:
                    retStr += c;
                    break;
            }
        }

        return retStr;
    }
}

export class MocaResponse {

    status: string;
    message: string;
    results: MocaResults;

    constructor(headers: any, body: any) {
        let status = headers.get('Command-Status');

        if (status == null) {
            this.status = '-1';
        } else {
            this.status = status;
        }

        if (this.status === '0') {
            this.message = '';
            this.results = new MocaResults();

            this.results.setResults(body);
        } else {
            let message = headers.get('Message');

            if (message == null) {
                this.message = '';
            } else {
                this.message = message;
            }

            this.results = new MocaResults();
        }
    }

    eOk(): boolean {
        return this.status === '0';
    }
}

export class MocaResults {

    columns: MocaColumn[];
    rows: any[];

    constructor() {
        this.columns = [];
        this.rows = [];
    }

    async setResults(jsonData: any) {
        let metadata = jsonData['metadata'];
        let values = jsonData['values'];

        for (let i in metadata) {
            this.columns.push(new MocaColumn(metadata[i][0], metadata[i][1]));
        }

        this.rows = values;
    }

    getColumnName(columnIdx: number): string {
        if (columnIdx < 0 || this.columns.length <= columnIdx) {
            return '';
        }

        return this.columns[columnIdx].name;
    }

    getValueUnsafe(rowIdx: number, columnIdx: number): any {
        return this.rows[rowIdx][columnIdx];
    }

    getValue(rowIdx: number, columnName: string): any {

        let columnIdx = -1;

        for (let i in this.columns) {
            if (this.columns[i].name.localeCompare(columnName) === 0) {
                columnIdx = parseInt(i, 10);
            }
        }

        if (columnIdx === -1) {
            return '';
        } else {
            if (rowIdx >= 0 && this.rows.length > rowIdx) {
                return this.getValueUnsafe(rowIdx, columnIdx);
            } else {
                return '';
            }
        }
    }

    toJsonStr(): any {
        let arr = [];
        for (let i = 0; i < this.rows.length; i++) {
            let obj: any = {};
            for (let j = 0; j < this.columns.length; j++) {
                obj[this.getColumnName(j)] = this.getValueUnsafe(i, j);
            }
            arr.push(obj);
        }
        return JSON.stringify(arr);
    }

    toPublishDataStr(): string {
        let publishDataStr = '';

        const appendAnd = '\n   and ';
        const appendAmp = ' &\n';

        for (let i = 0; i < this.rows.length; i++) {

            publishDataStr += 'publish data\n where ';

            for (let j = 0; j < this.columns.length; j++) {

                const key = this.getColumnName(j);
                const val = this.getValueUnsafe(i, j);

                // Removing null values.
                if (val != null) {
                    publishDataStr += `${key} = '${val}'${appendAnd}`;
                }
            }

            publishDataStr = publishDataStr.substring(0, publishDataStr.lastIndexOf(appendAnd));
            publishDataStr += appendAmp;
        }

        if (publishDataStr.length > 0) {
            publishDataStr = publishDataStr.substring(0, publishDataStr.lastIndexOf(appendAmp));
            publishDataStr += '\n|\n';
        }

        return publishDataStr;
    }
}

class MocaColumn {

    name: string;
    dataType: string;

    constructor(name: string, dataType: string) {
        this.name = name;
        this.dataType = dataType;
    }
}

export function toPublishDataStr(data: any): string {

    let publishDataStr = '';

    if (data == null) {
        return publishDataStr;
    }

    const appendAnd = '\n   and ';
    const appendAmp = ' &\n';

    if (Array.isArray(data)) {
        const arr = data;

        for (let i = 0; i < arr.length; i++) {

            const obj = arr[i];

            publishDataStr += 'publish data\n where ';

            for (const key in obj) {
                const val = obj[key];

                if (val != null) {
                    publishDataStr += `${key} = '${val}'${appendAnd}`;
                }
            }

            publishDataStr = publishDataStr.substring(0, publishDataStr.lastIndexOf(appendAnd));
            publishDataStr += appendAmp;
        }

        if (publishDataStr.length > 0) {
            publishDataStr = publishDataStr.substring(0, publishDataStr.lastIndexOf(appendAmp));
        }
    } else if (typeof data === 'object') {
        const obj = data;

        publishDataStr += 'publish data\n where ';

        for (const key in obj) {
            const val = obj[key];

            if (val != null) {
                publishDataStr += `${key} = '${val}'${appendAnd}`;
            }
        }

        publishDataStr = publishDataStr.substring(0, publishDataStr.lastIndexOf(appendAnd));
    } else {
        publishDataStr += `publish data\n where val = '${data}'`;
    }

    if (publishDataStr.length > 0) {
        publishDataStr += '\n|\n';
    }

    return publishDataStr;
}