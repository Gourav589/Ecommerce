import React from "react";
import { NavLink } from "react-router-dom";
import'./Navbar.css';
const Navbar=()=>{
    return( <>
<div className="navbar">
  <div className="logo">
    <img src="/shopsy-high-resolution-logo (1).png"/>
  </div>
  <div className="search-bar">
    <input type="text" placeholder="Search for products,brands and more" />
    <img src="https://cdn-icons-png.flaticon.com/128/9177/9177086.png" />
  </div>
  <div className="login">
    <ul>
      <li>
      <NavLink to="/Login">
     Login
        </NavLink>
      </li>
    </ul>
  </div>
  <div className="become">
    <ul>
      <li>
        <a href="#">Become a seller</a>
      </li>
    </ul>
  </div>
  <div className="more">
    <ul>
      <li>
        <a href="#">More</a>
      </li>
      <img src="https://cdn-icons-png.flaticon.com/128/6364/6364586.png" />
    </ul>
  </div>
  <div className="cart">
    <img src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png" />
    <ul>
      <li>
        <a href="#">Cart</a>
      </li>
    </ul>
  </div>
</div>
</> )
}
export default Navbar;