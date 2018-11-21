import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
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

      <div className="productPageWrapper">
        <h2>Överdelar</h2>
          <div className="ProductPageContainer">
            <div className="clothingProductPage">
              <img src="./images/prod.jpg"/>
              <div className="descProductPageOverlay">
                <div className="descProductPageText">
                  <h2>Omlottbody med musapplikation nyfödd blå</h2>
                  <p>Blå prickig omlottbody i mjuk ekologisk bomull för nyfödd. Bodyn är prydd med en musapplikation på magen</p>
                  <p>Pris: 199kr</p>

                </div>
              </div>
            </div>
            <div className="clothingProductPage">
              <img src="./images/prod.jpg"/>
              <div className="descProductPageOverlay">
                <div className="descProductPageText">
                <h2>Omlottbody med musapplikation nyfödd blå</h2>
                <p>Blå prickig omlottbody i mjuk ekologisk bomull för nyfödd. Bodyn är prydd med en musapplikation på magen</p>
                <p>Pris: 199kr</p>
                  </div>
                </div>
              </div>
              <div className="clothingProductPage">
                <img src="./images/prod.jpg"/>
                <div className="descProductPageOverlay">
                  <div className="descProductPageText">
                  <h2>Omlottbody med musapplikation nyfödd blå</h2>
                  <p>Blå prickig omlottbody i mjuk ekologisk bomull för nyfödd. Bodyn är prydd med en musapplikation på magen</p>
                  <p>Pris: 199kr</p>
                    </div>
                  </div>
                </div>
                <div className="clothingProductPage">
                  <img src="./images/prod.jpg"/>
                  <div className="descProductPageOverlay">
                    <div className="descProductPageText">
                    <h2>Omlottbody med musapplikation nyfödd blå</h2>
                    <p>Blå prickig omlottbody i mjuk ekologisk bomull för nyfödd. Bodyn är prydd med en musapplikation på magen</p>
                    <p>Pris: 199kr</p>
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
      </div>


    )
  }

}

export default ProductPage
