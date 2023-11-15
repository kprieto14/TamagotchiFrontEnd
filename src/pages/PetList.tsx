import React from "react"
import Kuchipachi from '../KuchipatchiFrontFacing.webp'

export function PetList() {

    return (
        <div className="pet-list-page">
            <h2>Choose your pet</h2>
            
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
        </div>
    )
}