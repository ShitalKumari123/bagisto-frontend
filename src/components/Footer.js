import React from 'react'
import '../style/Footer.css'

function Footer() {
  return (
    <div>
      <div className="foot">
<div className="us">
<ul>
  <li><a href="#">About Us</a></li>
  <li><a href="#">Contact Us</a></li>
  <li><a href="#">Customer Service</a></li>
  <li><a href="#">What's New</a></li>
  <li><a href="#">Terms of Use</a></li>
  <li><a href="#">Terms & Conditions</a></li>
</ul>
</div>
<div className="policy">
  <ul>
<li><a href="#">Privacy Policy</a></li>
  <li><a href="#">Payment Policy</a></li>
  <li><a href="#">Shipping Policy</a></li>
  <li><a href="#">Refund Policy</a></li>
  <li><a href="#">  Return Policy</a></li>
  </ul>
</div>
<div className="mail">
<h2>Get Ready for our <br />Fun Newsletter</h2>
<p>Subscribe to stay in touch</p>
<input type="text" placeholder='enter your email' />
<button className="submit">submit</button>
</div>
      </div>
      <div className="last"><p>© Copyright 2010 - 2024, Webkul Software (Registered in India). All rights reserved.</p></div>
    </div>
  )
}

export default Footer
