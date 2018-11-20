import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import "./productpage.scss"


class ProductPage extends React.Component {

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

      <div className="productPageHeader">
        <h1>Förslag på kläder</h1>
      </div>

      <div className="productPageWrapper">
        <h2>Överdelar</h2>
          <div className="ProductPageContainer">
            <div className="clothingProductPage">
              <img src="./images/prod.jpg"/>
              <div className="descProductPageOverlay">
                <div className="descProductPageText">
                  <h2>Test</h2>
                  <p>hej</p>
                </div>
              </div>
            </div>
            <div className="clothingProductPage">
              <img src="./images/prod.jpg"/>
              <div className="descProductPageOverlay">
                <div className="descProductPageText">
                  <h2>Test</h2>
                  <p>hej</p>
                  </div>
                </div>
              </div>
              <div className="clothingProductPage">
                <img src="./images/prod.jpg"/>
                <div className="descProductPageOverlay">
                  <div className="descProductPageText">
                    <h2>Test</h2>
                    <p>hej</p>
                    </div>
                  </div>
                </div>
                <div className="clothingProductPage">
                  <img src="./images/prod.jpg"/>
                  <div className="descProductPageOverlay">
                    <div className="descProductPageText">
                      <h2>Test</h2>
                      <p>hej</p>
                      </div>
                    </div>
                  </div>
              </div>

              <h2>Underdelar</h2>
              <div className="ProductPageContainer">
                <div className="clothingProductPage">
                  <img src="./images/prod.jpg"/>
                  <div className="descProductPageOverlay">
                    <div className="descProductPageText">
                      <h2>Test</h2>
                      <p>hej</p>
                      </div>
                    </div>
                  </div>
                  <div className="clothingProductPage">
                    <img src="./images/prod.jpg"/>
                    <div className="descProductPageOverlay">
                      <div className="descProductPageText">
                        <h2>Test</h2>
                        <p>hej</p>
                        </div>
                      </div>
                    </div>
                    <div className="clothingProductPage">
                      <img src="./images/prod.jpg"/>
                      <div className="descProductPageOverlay">
                        <div className="descProductPageText">
                          <h2>Test</h2>
                          <p>hej</p>
                          </div>
                        </div>
                      </div>
                      <div className="clothingProductPage">
                        <img src="./images/prod.jpg"/>
                        <div className="descProductPageOverlay">
                          <div className="descProductPageText">
                            <h2>Test</h2>
                            <p>hej</p>
                            </div>
                          </div>
                        </div>
                </div>




        <Footer />
      </div>
      </div>

    )
  }

}

export default ProductPage
