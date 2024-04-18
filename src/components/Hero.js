import React from 'react'
import '../style/Hero.css'
import NewProducts from './NewProducts'
import Game from './Game'
import Row from './Row'
import Footer from './Footer'

function Hero() {
  return (
    <div>
      <img src="https://demo.bagisto.com/bagisto-common/storage/theme/1/4MR094BrW5hB2FkJzQLO5BYEP4oeYwwpQN1WPQTO.webp" width="100%" alt="" />
      <div className="strip">Get UPTO 40% OFF on your 1st order SHOP NOW</div>
     <NewProducts/>
   <Game/>
   <Row/>
   <Footer/>
    </div>
  )
}

export default Hero
