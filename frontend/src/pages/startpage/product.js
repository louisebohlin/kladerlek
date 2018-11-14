import React from "react"

const productsJson = require("../../products.json")

class Product extends React.Component {

  render() {
    return (
      <div className="clothingWrapper">

        <div className="clothingMini">
          <img src={this.props.image} />

        </div>
        <div className="descMini">
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
        </div>
        </div>

    )
  }

}

export default Product
