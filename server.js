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
  age: String,
  weather: {
    type: String,
    required: true,
    enum: ["Kallt", "Minusgrader", "Lagom"]
  },
  category: String
})

// const products = [
//   new Product({
//     title: "Leggings med blommönster",
//     price: 179,
//     description: "Blommönstrade leggings. Plagget har elastisk midja som går att regleras med knapphålsresår.",
//     url: "https://www.polarnopyret.se/globalassets/productimages-polarnopyret/7325852924056.jpg?ref=4F32C9773D&w=320&h=320&mode=max",
//     image: "https://www.polarnopyret.se/globalassets/productimages-polarnopyret/7325852924056.jpg?ref=4F32C9773D&w=320&h=320&mode=max",
//     age: "walk",
//     weather: {
//        type: String,
//        required: true,
//        enum: ["Kallt", "Minusgrader", "Lagom"]
//      },
//     category: "Nederdelar"
//   })
// ]
//
// products.forEach(product => {
//   product.save().then(() => { console.log("Created", product.title )})
// })

app.get("/products", (req, res) => {
  Product.find().then(products => {
    res.json(products)
  })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
