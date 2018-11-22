import React from "react"

class Product extends React.Component {

  render() {
    return (
      <div className="productPageWrapper">
        <div className="clothingProductPage">
        <div className="overlayImage">
         <div className="overlayButton"><a target="_blank" href={this.props.url}>Köp</a></div>
          <img className="productImage" src={this.props.image} alt="" />

          <div className="descProductPageText">

            <h2>{this.props.title}</h2>

            <p>{this.props.description}</p>
            <p>Pris: {this.props.price} kr</p>
            </div>

          </div>
        </div>
      </div>

    )
  }

}

export default Product
