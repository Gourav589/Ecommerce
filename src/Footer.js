import React from "react";
import { NavLink } from "react-router-dom";
import'./Footer.css';

const Footer=()=>{
    return( <>
<footer className="footer-section">
  <div className="container5">
    <div className="footer-cta pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-map-marker-alt" />
            <div className="cta-text">
              <h4>Find us</h4>
              <span>1010 Avenue, sw 54321, chandigarh</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-phone" />
            <div className="cta-text">
              <h4>Call us</h4>
              <span>9876543210 0</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="far fa-envelope-open" />
            <div className="cta-text">
              <h4>Mail us</h4>
              <span>mail@info.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-content pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-lg-4 mb-50">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="#">
                <img src="/shopsy-high-resolution-logo (2).png"
                  className="img-fluid"
                  alt="logo"
                />
              </a>
            </div>
            <div className="footer-text">
              <p>
                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                do eiusmod tempor incididuntut consec tetur adipisicing
                elit,Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="footer-social-icon">
              <span>Follow us</span>
              <a href="#">
                <img src="https://img.icons8.com/?size=48&id=uLWV5A9vXIPu&format=png" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/?size=48&id=32323&format=png" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/?size=48&id=5MQ0gPAYYx7a&format=png" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
            <ul>
              <li>
              <NavLink  to="/">
          Home
        </NavLink>
              </li>
              <li>
              <NavLink to="/About">
          About us  
        </NavLink>
              </li>
              <li>
              <NavLink  to="/Contact">
          contact us
        </NavLink>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Expert Team</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <div className="footer-text mb-25">
              <p>
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
            </div>
            <div className="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" />
                <button>
                  <img src="https://img.icons8.com/?size=50&id=F4ZPUh2Mk5tk&format=png" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-area">
    <div className="container5">
      <div className="row"></div>
    </div>
  </div>
</footer>
</> )
}
export default Footer;