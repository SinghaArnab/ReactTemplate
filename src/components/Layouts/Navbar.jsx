import React from 'react'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <div  id="nav">
        <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      YoYo Portfolio
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="#Header" >Home</a>
    <a href="#About">About</a>
    <a href="#Service">Service</a>
    <a href="#Skills" >Skills</a>
    <a href="#Footer">Contact US</a>
   <a type="submit" href="login.jsx">login</a>
  </div>

</div>
    </div>
  )
}

export default Navbar