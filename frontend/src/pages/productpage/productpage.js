import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import Product from "./product.js"
import "./productpage.scss"

const productsApi = "https://kladerlek.herokuapp.com/products"
const queryString = require('query-string');

class ProductPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    window.scrollTo(0,0)
    const query = queryString.parse(this.props.location.search)
    console.log(query.weather)
    fetch(`${productsApi}?age=${query.age}&weather=${query.weather}`).then(response => response.json()).then(json => {
      this.setState({
        products: json
      })
    })
  }

  render() {
    return (
      <div className="productPageBG">
        <Header />
        <div className="ProductVideoContainer">
          <div className="VideoOverlay">
            <video id="background-video-product" loop autoPlay>
              <source src="./images/video-product.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="HeroContainer">
            <div className="heroImageProduct">
              <img src="./images/producthero.png" />
          </div>
        </div>


        <div className="productPageTitle">
          <h1>Förslag från oss på Kläderlek</h1>
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


        <Footer />
      </div>


    )
  }

}

export default ProductPage
