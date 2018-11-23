import React from "react"

class Product extends React.Component {

  render() {
    return (
      <div className="productPageWrapper">
        <div className="clothingProductPage">
      <a target="_blank" href={this.props.url}>
          <img className="productImage" src={this.props.image} alt="" /></a>

          <div className="descProductPageText">

            <h2>{this.props.title}</h2>

            <p>{this.props.description}</p>
            <p>Pris: {this.props.price} kr</p>
            </div>
            </div>

      </div>

    )
  }

}

export default Product
