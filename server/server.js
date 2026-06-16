const http = require('http');
const port = 2000;
const server = http.createServer((req,res)=>{
    res.write('<h1>Hello User!!!</h1>');

    res.end();
});
server.listen(port,()=>{
    console.log(`server started successfully`);
    console.log(`http://localhost:${port}`)
});
