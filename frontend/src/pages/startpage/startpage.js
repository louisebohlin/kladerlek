import React from "react"
import "./startpage.scss"

class StartPage extends React.Component {

  render() {
  this.props.onChange("hej")
    return (
      <div>
      {this.props.name} - {this.props.main.temp} - {this.props.weather[0].description}
      </div>
    )
  }
}

export default StartPage
