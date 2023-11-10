import React from 'react'
import Kuchipachi from './KuchipatchiFrontFacing.webp'

export function App() {
  return (
    <div>
      <h1>Fake Tamagotchi Site</h1>
      <h2>Choose your pet</h2>

      {/* Pet Menu component here*/}
      <main>
        <article>
          <h3>Pet Name Here</h3>
          <img src={Kuchipachi} alt="" /> 
          <button className='pet-button'>Details</button>
        </article>

        <article>
          <h3>Pet Name Here</h3>
          <img src={Kuchipachi} alt="" /> 
          <button className='pet-button'>Details</button>
        </article>

        <article>
          <h3>Pet Name Here</h3>
          <img src={Kuchipachi} alt="" /> 
          <button className='pet-button'>Details</button>
        </article>
      </main>

      <button>Make a New Pet</button>

      <p>Give photo credits to Ema with link to insta</p>

      <h4>Made with 🫶🏽 in Florida</h4>
    </div>
  )
}
