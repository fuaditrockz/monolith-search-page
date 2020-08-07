require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { createProxyMiddleware } = require('http-proxy-middleware')

const mongoConnection = require('./config/mongodb-connection')
mongoConnection(process.env.ENVIRONMENT)

const pokemonRouters = require('./routes/pokemon')

const app = express();
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* app.use('/v1', createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: true
})) */
app.use('/v1', pokemonRouters)

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' })
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`))