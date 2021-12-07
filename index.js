const http =  require('http')
const app = require('./app')
const server = http.createServer(app)
require('dotenv').config()

server.listen(3000,console.log('listenting to server 3000'))

