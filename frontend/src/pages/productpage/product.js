import React from "react"

class Product extends React.Component {

  render() {
    return (

      <div className="productPageWrapper">
        <h2>{this.props.category}</h2>
        <div className="ProductPageContainer">
          <div className="clothingProductPage">
            <img className="productImage" src={this.props.image} alt="" />
            <div className="descProductPageText">
              <h2>{this.props.title}</h2>
              <p>{this.props.description}</p>
              <p>Pris: {this.props.price}</p>

            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default Product
