const koa = require('./services/koa')
const mongo = require('./services/mongo')

async function init () {
  if (await mongo.init()) {
    koa.init()
  }
}

init()