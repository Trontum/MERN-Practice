import http2 from "http2"
const client = http2.connect('http://localhost:4000');
const req = client.request({ ':method': 'GET', ':path': '/' });
var message=' ';
req.on('response', (responseHeaders) => {
          console.log('Got response..');
});
req.on('data', (chunk) => {
          message=message+chunk;
});
req.on('end', () => {
          console.log(message);
          client.destroy();
});