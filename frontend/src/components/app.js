import React from "react"
import StartPage from "../pages/startpage/startpage.js"

const query = `city name`;

class App extends React.Component {

  state = {
    city: [],
    filter: ""
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}`)
      .then(response => response.json())
      .then(json => {
        this.setState({ city: json })
      })
  }

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value
    })
  }

render() {
    return (
      <div>
        <select onChange={this.handleFilterChange}>
          <option value="">All</option>
          <option value="Stockholm">Stockholm</option>
          <option value="Göteborg">Göteborg</option>
          <option value="Malmö">Malmö</option>
          <option value="Longyearbyen">Longyearbyen</option>
        </select>

        {this.state.city.map(city => (
          <StartPage city={city} />
        ))}
      </div>
    )
  }

}

export default App

// test = city => {
//   console.log(city)
// }
