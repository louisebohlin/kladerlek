import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(bodyParser.json())
app.use(express.static("./frontend/build"))
app.use(cors())

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

app.get("/", (req, res) => {
  res.send("Kläderlek")
})

app.get("/products", (req, res) => {
  const options = {}

  if (req.query.age) {
    options.age = req.query.age
  }

  if (req.query.weather) {
    options.weather = req.query.weather.split(",")
  }
  Product.find(options).then(products => {
    res.json(products)
  })
})


app.post("/products", (req, res) => {
  const product = new Product(req.body)
  product.save()
    .then(() => { res.status(201).send("Product created") })
    .catch(err => { res.status(400).send(err) })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
