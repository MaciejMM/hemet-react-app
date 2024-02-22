const express = require('express');
const http = require('http');
const path = require('path');
const helmet = require('helmet');
const crypto = require('crypto');
const app = express();

app.use((req, res, next) => {
  res.locals.cspNonce = crypto.randomBytes(32).toString('hex');
  next();
});

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ['\'none\''],
        scriptSrc: ['\'self\'', (req, res) => `'nonce-${res.locals.cspNonce}'`],
        imgSrc: ['\'self\'', 'data:', 'https://res.cloudinary.com'],
        styleSrc: ['\'self\'', '\'unsafe-inline\''],
        connectSrc: ['\'self\''],
        frameSrc: ['\'self\''],
        manifestSrc: ['\'self\''],
      },
    },
    noSniff: true,
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
  }),
);

app.use(express.static(path.join(__dirname, 'build')));

app.use((req, res, next) => {
  if (req.protocol !== 'https') {
    res.redirect(`https://${req.header('host')}${req.url}`);
  } else {
    next();
  }
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on http://localhost:${port}`));
