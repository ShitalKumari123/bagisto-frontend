import React from 'react'
import '../style/Game.css'
import New from './Newaddition'

function Game() {
  return (
    <div>
        <div className="heading">
      <h1>The game with our    <br />  new additions!</h1>
      </div>
      <div className="put">
      {
        New.map((ev)=>{
            return(
                <>
                <div className="to">
                    <div className="containers">
                <img className='pic' src={ev.image} alt="" />
                </div>
                <h2 className='collection'>{ev.name}</h2>
                </div>
                </>
            )
        })
      }
</div>
    </div>
  )
}

export default Game
