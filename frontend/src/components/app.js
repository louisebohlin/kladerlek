import React from "react"
import StartPage from "../pages/startpage/startpage.js"


class App extends React.Component {

  state = {
    city: "Stockholm,Sweden",
    filter: "",
    weather: null
  }

  componentDidMount() {
    this.getWeather()
  }

  getWeather = () => {
    const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=ae7f18bdb699e35f5dd3399dba9247c1`;
    fetch(weatherAPI)
      .then(response => response.json())
      .then(json => {
        this.setState({
          weather: json
        })
      }).catch(err => {
        console.log(err)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.city !== this.state.city) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=ae7f18bdb699e35f5dd3399dba9247c1`)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.setState({
            weather: json })
        })
    }
  }

  handleCityChange = event => {
    this.setState({
      city: event.target.value
    })
  }

render() {
    return (
      <div>
        <div className="cityDropdown">
          <select onChange={this.handleCityChange}>
            <option value="">All</option>
            <option value="Stockholm">Stockholm</option>
            <option value="Göteborg">Göteborg</option>
            <option value="Malmö">Malmö</option>
            <option value="Longyearbyen">Longyearbyen</option>
          </select>
        </div>
      </div>
    )
  }
}

export default App
