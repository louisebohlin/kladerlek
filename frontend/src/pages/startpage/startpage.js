import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import Product from "./product.js"
import Button from "../../components/button/button.js"
import Weather from "./weather.js"
import "./startpage.scss"

const productsJson = require("../../products.json")

const LAGOM = "lagom"
const MINUSGRADER = "minusgrader"
const KALLT = "kallt"

class StartPage extends React.Component {
  state = {
    city: "Stockholm, Sweden",
    filter: "",
    weather: null,
    productTypes: []
  }

componentDidMount() {
    this.getWeather()
  }

handleCityChange = event => {
  this.setState({
    city: event.target.value
  })
}

  getWeather = e => {
    const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=ae7f18bdb699e35f5dd3399dba9247c1`
    fetch(weatherAPI)
      .then(response => response.json())
      .then(json => {
        this.setState({
          weather: json,
          city: json.name,
          temperature: json.main.temp.toFixed(1) + '\xB0C',
          temperatureNumber: json.main.temp,
          description: json.weather[0].description
        })
      }).catch(err => {
        console.log(err)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.city !== this.state.city) {
      this.getWeather()
    }
  }

  tempToWeatherType = temp => {
    if (temp < 0.0) {
      return ["lagom", "kallt", "minusgrader"]
    } else if (temp > 15.0) {
      return ["lagom"]
    } else {
      return ["lagom", "kallt"]
    }
  }

  filterProductTypes = age => {
    const result = this.tempToWeatherType(this.state.temperatureNumber)
    const filteredProductTypes = productsJson.product.filter(item => {
      const hasAge = item.age.includes(age)
      const hasWeather = result.includes(item.weather)
      if (hasAge && hasWeather) {
        return true
        console.log(filteredProductTypes)
      } else {
        return false
      }
    })

    this.setState({productTypes: filteredProductTypes})
  }

  render() {
    return (
    <div className="wrap">
      <div className="startPageWrapper">
        <Header />
          <div className="cityDropdownWrapper">
            <div className="cityDropdown">
            <select onChange={this.handleCityChange}>
              <option value="">Välj stad </option>
              <option value="Stockholm">Stockholm</option>
              <option value="Göteborg">Göteborg</option>
              <option value="Malmö">Malmö</option>
              <option value="Longyearbyen">Longyearbyen</option>
            </select>
          </div>
        </div>

        <div className="VideoContainer">
          <div className="VideoOverlay">
            <div className="heroWeather">
            <Weather city={this.state.city}
              description={this.state.description}
              temperature={this.state.temperature}/>
            </div>
          <video id="background-video" loop autoPlay>
            <source src="./images/video_start.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="HeroContainer">
        <div className="heroWeather">
          <Weather city={this.state.city}
            description={this.state.description}
            temperature={this.state.temperature}/>
          </div>
          <div className="heroImage">
            <img src="./images/vader/regn.jpg" />
          </div>
        </div>

        <div className="iconContainer">
          <h1>Hur gammal är ditt barn?</h1>
            <div className="iconContainerButtons">
              <div className="iconMini">
                <img src="./images/mini/ikon_mini.svg" />
                <div className="buttonIconContainer">
                  <button onClick={() => this.filterProductTypes("mini")}>0 - 6 mån</button>
                </div>
              </div>
              <div className="iconCrawl">
                <img src="./images/mini/ikon_walk.svg" />
                <div className="buttonIconContainer">
                  <button onClick={() => this.filterProductTypes("walk")}>6 mån - 2 år</button>
                </div>
              </div>
              <div className="iconCrawl">
                <img src="./images/mini/ikon_talk.svg" />
                <div className="buttonIconContainer">
                  <button onClick={() => this.filterProductTypes("talk")}>2 - 8 år</button>
                </div>
              </div>
            </div>
          </div>

          <div className="ProductPageApp">
          {this.state.productTypes.map((product) => {
              return <Product name={product.name}
                       image={product.image}
                       gif={product.gif}
                       age={product.age}
                       description={product.description} />
          })}
          </div>

          <div className="buttonToProductPage">
            <Link to="/productpage">
              <button className="productPageButton">Förslag på kläder</button>
            </Link>
          </div>
          <Footer />
        </div>
      </div>

    )
  }
}

export default StartPage
