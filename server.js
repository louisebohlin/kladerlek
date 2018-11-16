import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())

const mongoServer = process.env.MONGO_URL || "mongodb://localhost/kladerlek"
mongoose.connect(mongoServer, { useMongoClient: true })
mongoose.Promise = Promise

const Product = mongoose.model("Product", {
  itemID: Number,
  title: String,
  price: Number,
  description: String,
  url: String,
  image: String,
  category: String
})

app.get("/products", (req, res) => {
  Product.find().then(products => {
    res.json(products)
  })
})

app.post("/products", (req, res) => {
  const jsonBody = req.body
  const product = new Product(jsonBody)

  product.save().then(() => {
    res.status(201).json({ created: true })
  }).catch(err => {
    res.status(400).json({ created: false, errorMsg: err.message })
  })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
