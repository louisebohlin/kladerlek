import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import Product from "./product.js"
import "./productpage.scss"

const productsApi = "https://kladerlek.herokuapp.com/products"

class ProductPage extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        products: [],
      }
    }

    componentDidMount() {
      fetch(productsApi).then(response => response.json()).then(json => {
        this.setState({
          products: json
        })
      })
    }


  render() {
    return (
    <div>
      <Header />
      <div className="ProductVideoContainer">
        <div className="VideoOverlay">
      <video id="background-video-product" loop autoPlay>
        <source src="./images/video-product.mp4" type="video/mp4" />
      </video>
      </div>
      </div>

      <div className="productsListContainer">
        {this.state.products.map((product, index) => <Product
          key={index}
          itemID={product._id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          url={product.url}
          age={product.age}
          weather={product.weather}
          category={product.category} />)}
      </div>

      <div className="productPage">

      <div className="productPageHeader">
        <h1>Förslag på kläder</h1>
        <p></p>
      </div>

      <Product />

        <Footer />
      </div>
    </div>



    )
  }

}

export default ProductPage
