const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, PUT, PATCH, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.url === '/' || req.url === '/index.html' || req.url === '') {
    const filePath = path.join(__dirname, '..', 'index.html');
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.status(200).send(data);
    } catch (err) {
      console.error('Error reading index.html:', err);
      res.status(404).send('<h1>404 - File Not Found</h1>');
    }
  } else {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
  }
};
