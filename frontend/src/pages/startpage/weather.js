import React from "react"
import "./startpage.scss"

class Weather extends React.Component {

  render() {
    return (
      <div className="weatherWrapper">
        <h2>{this.props.description}</h2>
        <p>{this.props.city}</p>
        <h1>{this.props.temperature}</h1>
      </div>

    )
  }

}

export default Weather
