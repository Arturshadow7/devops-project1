const http = require('node:http');
const { add, isEven } = require('./index');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`2 + 3 = ${add(2, 3)}\n7 is even: ${isEven(7)}\n`);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
