import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from  "../../components/header/header.js"
import Product from "./product.js"
import Button from "../../components/button/button.js"
import "./startpage.scss"

const productsJson = require("../../products.json")

class StartPage extends React.Component {

  render() {
    return (
      <div>
      <div className="startPageWrapper">
      <Header />
      <div className="heroImageWrapper">
        <div className="heroImage">
          <img src="./images/vader/regn.jpg" />
        </div>
      </div>
      <div className="iconContainer">
        <h1>Hur gammal är ditt barn?</h1>
        <div className="iconContainerButtons">
          <div className="iconMini">
            <img src="./images/mini/ikon_mini_blk.svg" />
            <h2>0-6 mån</h2>
          </div>
          <div className="iconCrawl">
            <img src="./images/crawl/ikon_crawl_blk.svg" />
            <h2>6-2 år</h2>
            </div>
            <div className="iconCrawl">
              <img src="./images/crawl/ikon_crawl_blk.svg" />
              <h2>2-10 år</h2>
              </div>
          </div>
          </div>

      {productsJson.product.map((product) => {
          return <Product name={product.name}
                   image={product.image}
                   age={product.age}
                   description={product.description}
   />
      })}

      <div className="buttonToProductPage">
        <a href= "/productpage">
          <Button>Se förslag</Button>
        </a>
         </div>
      </div>
      </div>

    )
  }
}

export default StartPage
