const Koa = require('koa');
const session = require('koa-session')
const cors = require('koa-cors')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const convert = require('koa-convert')

const HTTP_PORT = 3000

exports.init = () => {
  const app = new Koa()

  app.use(logger())

  app.use(json())
  app.use(bodyParser())

  /* session config */
  app.keys = ['roll call']
  app.use(convert(session(app)))

  /* cors config */
  const corsConfig = {
    credentials: true
  }
  app.use(convert(cors(corsConfig)))

  /* routes */
  require('./../routes/user')(app)

  app.listen(HTTP_PORT)

  console.log('koa ready on port', HTTP_PORT)
}