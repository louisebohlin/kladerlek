import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./header.scss"


class Header extends React.Component {
  render() {
    return (
      <div className="headerWrapper">
        <div className="header-info">
          <Link to="/">
          <img src="./images/logo.svg" />
          </Link>
          <ul className="header-list">
            <span className="links_line">
              <li>Guides</li></span>
              <li>About</li>
              <li>Contact</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
