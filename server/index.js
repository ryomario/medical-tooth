const jsonServer = require('json-server');
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const port = 8888

server.use(middlewares)

// server.use(jsonServer.bodyParser)
// server.post(endPoint+"login",(req, res, next) => {
//   // Ubah method POST ke GET agar tidak mengubah data
//   req.method = "GET"
//   console.log(req.body)
//   // req.query = req.body
//   if (req.body.password){
//     next()
//     return
//   }

//   res.sendStatus(404)
// })

// const ruleEndpoint = {}
// ruleEndpoint[`${endPoint}*`] = '/$1'
// server.use(jsonServer.rewriter(ruleEndpoint))

server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`)
})