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
  image: String,
  category: String
})

app.get("/products", (req, res) => {
  Product.find().then(products => {
    res.json(products)
  })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
