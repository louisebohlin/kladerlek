import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from  "../../components/header/header.js"
import "./productpage.scss"

class ProductPage extends React.Component {

  render() {
    return (
      <div>
        <div className="productPageWrapper">
        <Header />
        <div className="productPageContainer">

          <div className="clothingProductPage">
            <img src="./images/overall.svg"/>
          </div>
          <div className="descProductPage">
            <h2>Test</h2>
            <p>hej</p>
          </div>
        </div>
        </div>

      </div>
    )
  }

}

export default ProductPage
