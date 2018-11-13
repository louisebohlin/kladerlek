import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())

const mongoServer = "mongodb://localhost/kladerlek"
mongoose.connect(mongoServer, { useMongoClient: true })
mongoose.Promise = Promise

const Product = mongoose.model("Product", {
  itemID: Number,
  title: String,
  price: Number,
  image: String,
  category: String
})

app.get("/products", (req, res) => {
  Product.find().then(products => {
    res.json(products)
  })
})

app.listen(8080, () => console.log("Example app listening on port 8080!"))
