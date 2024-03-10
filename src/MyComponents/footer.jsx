import React from 'react'
import "./footer.css"
const footer = () => {
  return (
    <>
    <div className="footer">
    <div className="container">
      <section id="f-logo">
        <img src="./images/logo/the-coca-cola-company-logo-white.svg" alt=""/>
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          <span>India | English</span>
        </div>
      </section>
      <section>
        <div className="f-details">
          <div className="details">
            <span>ABOUT US</span>
            <h5>Media Center</h5>
            <h5>Coca‑Cola Foundation</h5>
            <h5>Investors</h5>
            <h5>Policies</h5>
            <h5>Careers</h5>
          </div>
          <div className="details">
            <span>NEED HELP?</span>
            <h5>FAQ</h5>
            <h5>Contact Us</h5>
            <h5>International</h5>
          </div>
          <div className="details">
            <h5>California Notice at Collection</h5>
            <h5>Do Not Sell My Personal Information</h5>
            <h5>Terms of Use</h5>
            <h5>Privacy Policy</h5>
            <h5>Cookies Settings</h5>
          </div>
        </div>
        <div className="social-media">
          <span>
            <i className="fa-brands fa-facebook-f"></i>
          </span>
          <span>
            <i className="fa-brands fa-linkedin-in"></i>
          </span>
          <span>
            <i className="fa-brands fa-instagram"></i>
          </span>
          <span>
            <i className="fa-brands fa-youtube"></i>
          </span>
        </div>
      </section>
    </div>
    <span>
      © 2024 The Coca‑Cola Company. All rights reserved. | design by | <b>Piyush vaghela</b> |
    </span>
    </div>
    </>
  )
}

export default footer
