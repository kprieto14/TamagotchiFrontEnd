import React from "react"
import Kuchipachi from '../KuchipatchiFrontFacing.webp'
import { Link } from "react-router-dom"

export function PetList() {

    return (
        <div className="pet-list-page">
            <h2>Choose your pet</h2>
            
            <main>
                <article>
                    <h3>Pet Name Here</h3>
                    <img src={Kuchipachi} alt="" /> 
                    <Link to="/items/42"><button className='pet-button'>Details</button></Link>
                </article>

                <article>
                    <h3>Pet Name Here</h3>
                    <img src={Kuchipachi} alt="" /> 
                    <Link to="/items/42"><button className='pet-button'>Details</button></Link>
                </article>

                <article>
                    <h3>Pet Name Here</h3>
                    <img src={Kuchipachi} alt="" /> 
                    <Link to="/items/42"><button className='pet-button'>Details</button></Link>
                </article>
            </main>

            <button>Make a New Pet</button>
        </div>
    )
}