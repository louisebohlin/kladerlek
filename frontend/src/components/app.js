import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import StartPage from "../pages/startpage/startpage.js"
import ProductPage from "../pages/productpage/productpage.js"

class App extends React.Component {

render() {
    return (
      <div className="appWrapper">
        <Router>
          <div className="navigation">
            <Route path="/" exact="true" component={StartPage} />
            <Route path="/productpage" exact="true" component={ProductPage} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
