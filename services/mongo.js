const MongoClient = require('mongodb').MongoClient

const MongoUrl = 'mongodb://localhost:27017/koa2-boilerplate'

let mongo

exports.init = async () => {
  mongo = await MongoClient.connect(MongoUrl)
  console.log('mongo ready')

  return true
}

exports.collection = name => mongo.collection(name)
