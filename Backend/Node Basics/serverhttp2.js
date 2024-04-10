import http2 from "http2"
 
const server = http2.createServer();
 
server.on('stream', (stream, requestHeaders) => {
        stream.respond({ ':status': 200, 'content-type': 'text/plain' });
        stream.end('Hello from node!!!');
});
server.listen(4000, function(){ console.log('Server listening')});