import React from "react"
import "./startpage.scss"

class Weather extends React.Component {

  render() {
    return (
      <div className="weatherWrapper">
        <h2>{this.props.city}</h2>
        <h2>{this.props.temperature}</h2>
        <h2>{this.props.description}</h2>
      </div>

    )
  }

}

export default Weather
