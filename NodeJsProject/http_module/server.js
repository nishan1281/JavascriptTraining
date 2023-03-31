//loading the module http
const http = require('http');
const port = 3000;              //defining a random port
const hostname = '127.0.0.1';   //defining a randomg hostname 


//create a server object:
const myServer = http.createServer((req, res)=>{
    res.setHeader('content-type', 'text/html');
    res.write('Hello World!'); //write a response to the client
    res.end("i m server") //end the response
});

//TO RUN THE SERVER
myServer.listen(port, hostname, ()=> {
    console.log(`server running at http://${hostname}:${port}`);
});
