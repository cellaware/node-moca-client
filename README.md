# node-moca-client
MOCA Client for Node.js

Example usage:
```typescript
const conn = new MocaConnection('http://localhost:4600/service', 'SUPER', 'SUPER');

await conn.login();

const res = await conn.executeCommand(`list warehouses`);
if (res.eOk()) {
    console.log(res.results.toJsonStr());
}

await conn.logout();
```