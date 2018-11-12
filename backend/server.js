import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())

const mongoServer = "mongodb://localhost/sprint5Repetition"
mongoose.connect(mongoServer, { useMongoClient: true })
mongoose.Promise = Promise

app.listen(8080, () =>
  console.log("Example app listening on port 8080!")
)
