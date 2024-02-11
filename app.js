const express = require('express');
const http = require('http');
const path = require('path');
const helmet = require('helmet');
const { Buffer } = require('buffer');
const { v4 as uuidv4 } = require('uuid');
let app = express();
const nonce = Buffer.from(uuidv4()).toString('base64');

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", `nonce-${nonce}`],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", 'https://res.cloudinary.com'],
      styleSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'"],
      frameSrc: ["'self'"],
    },
  }),
);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
