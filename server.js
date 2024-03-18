const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

// Start the server on port 4923
const PORT = 4923;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
