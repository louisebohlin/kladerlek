import React from "react"
import "./footer.scss"


class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-container-logo">
            <img src="./images/logo_blk.svg" />
          </div>
          <div className="footer-info">
            <div className="footer-header">
              <h4>Contact</h4>
            </div>
              <p>Kläderlek</p>
              <p></p>
              <a><p>info@kladerlek.se</p></a>
            </div>
        <div className="footer-social">
          <div className="footer-header-soc">
            <h4>Social media</h4>
          </div>
            <a href="https://www.linkedin.com/in/kladerlek" target="_blank"><p>LinkedIn</p></a>
            <a href="https://www.facebook.com/kladerlek"><p>Facebook</p></a>
          </div>

        </div>
      </div>
    )
  }
}

export default Footer
