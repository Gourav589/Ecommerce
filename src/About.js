import React from "react";
import'./About.css';


const About=()=>{
    return(<>
 
  <div
    id="carouselExampleSlidesOnly"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://img.freepik.com/premium-photo/online-shop-digital-device_1061852-1130.jpg?w=1060"
          className="d-block w-100"
          alt="..."
          height="580px"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/premium-photo/woocommerce-website-product-landing-page-display-page-ecommerce-website_968517-144394.jpg?w=996"
          className="d-block w-100"
          alt="..."
          height="580px"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/premium-photo/elegance-pixels-mesmerizing-digital-ui-fashion-havens-landing-page_941561-12319.jpg?w=1060"
          className="d-block w-100"
          alt="..."
          height="580px"
        />
      </div>
    </div>
  </div> 

   <div className="about-box">
    <div className="about-box1">
      <img src="https://media.istockphoto.com/id/1498322831/photo/indian-business-people-meeting-presentation-in-office-conference-room-showing-infographics.jpg?s=2048x2048&w=is&k=20&c=S6KkXbaF2Eyjk8Tid2SrHuWN9zelOxhc744ddWs0Xv4=" />
    </div>
    <div className="about-text">
      <h1>
        <span>The Shopsy Group</span>
      </h1>
      <p>
        The Shopsy Group is one of India's leading digital commerce entities and
        includes group companies Shopsy, Myntra, Shopsy Wholesale, Shopsy
        Health+, Cleartrip and ANS Commerce.
      </p>
    </div>
  </div>
  <div className="about-text-1">
    <h1>Ethics &amp; Compliance</h1>
  </div>
  <div className="about-box2">
    <img src="https://corporate.flipkart.net/assets/images/Homepage_ethics.jpg" />
  </div>
  <div className="about-text-2">
    <p>
      Building trust with Integrity. At Shopsy, every decision made is based on
      ethical and <br />
      moral principles - no success is meaningful if it’s not achieved the right
      way.
    </p>
  </div>
  <div className="about-box3">
    <div className="about-box4">
      <img src="https://corporate.flipkart.net/assets/images/technology-image.png" />
    </div>
    <div className="about-text-3">
      <h1>
        <span> TECHNOLOGY AT Shopsy </span>
        <br />
        INNOVATION
      </h1>
      <p>
        Shopsy technology drives path-breaking, customer-focused innovation that
        makes high quality products accessible to Indian shoppers, besides
        making the online shopping experience convenient, intuitive and
        seamless.
      </p>
    </div>
  </div>

    </>)
}
export default About;