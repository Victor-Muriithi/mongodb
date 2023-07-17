const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect('mongodb+srv://work15place:kB78m0aSAXH1tRFl@cluster0.xy8vwzv.mongodb.net/?retryWrites=true&w=majority')
      .then(client => {
        dbConnection = client.db("Books")
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}