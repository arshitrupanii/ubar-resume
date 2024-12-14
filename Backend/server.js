const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000;

// run server
const server = http.createServer(app)

server.listen(port,()=>{
    console.log(`server is running in ${port}`)
})
