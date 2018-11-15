import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from  "../../components/header/header.js"
import Product from "./product.js"
import Button from "../../components/button/button.js"
import Weather from "./weather.js"
import "./startpage.scss"

const productsJson = require("../../products.json")

class StartPage extends React.Component {
  state = {
    city: "Stockholm, Sweden",
    filter: "",
    weather: null
  }

componentDidMount() {
  this.getWeather()
}

handleCityChange = event => {
  this.setState({
    city: event.target.value,
  })
}

  getWeather = (e) => {
    const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=ae7f18bdb699e35f5dd3399dba9247c1`;
    fetch(weatherAPI)
      .then(response => response.json())
      .then(json => {
        this.setState({
          weather: json,
          city: json.name,
          temperature: json.main.temp.toFixed(1),
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




  render() {
    return (
      <div>
      <div className="startPageWrapper">
      <Header />


      <div className="cityDropdownWrapper">

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


      <Weather city={this.state.city}
               temperature={this.state.temperature}
               description={this.state.description} />


      <div className="heroImageWrapper">
        <div className="heroImage">
          <img src="./images/vader/regn.jpg" />
        </div>
      </div>



      <div className="iconContainer">
        <h1>Hur gammal är ditt barn?</h1>
        <div className="iconContainerButtons">
          <div className="iconMini">
            <img src="./images/mini/ikon_mini_blk.svg" />
            <h2>0-6 mån</h2>
          </div>
          <div className="iconCrawl">
            <img src="./images/crawl/ikon_crawl_blk.svg" />
            <h2>6-2 år</h2>
            </div>
            <div className="iconCrawl">
              <img src="./images/crawl/ikon_crawl_blk.svg" />
              <h2>2-10 år</h2>
              </div>
          </div>
          </div>

      {productsJson.product.map((product) => {
          return <Product name={product.name}
                   image={product.image}
                   age={product.age}
                   description={product.description}
   />
      })}

      <div className="buttonToProductPage">
        <Link to="/productpage">
          <button className="productPageButton">Add product</button>
      </Link>
      </div>
      </div>

      </div>

    )
  }
}

export default StartPage
