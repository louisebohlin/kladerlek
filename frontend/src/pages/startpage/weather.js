import React from "react"
import "./startpage.scss"

class Weather extends React.Component {

  render() {
    return (
      <div className="weatherWrapper">
        <h2>{this.props.city}</h2>
        <p>{this.props.description}</p>
        <h1>{this.props.temperature}</h1>
      </div>

    )
  }

}

export default Weather
