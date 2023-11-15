import React from "react";
import Kuchipachi from '../KuchipatchiFrontFacing.webp'

export function PetItemPage() {
    return (
        <div>
            <h2>Pet Information</h2>

            <aside>
                <img src={Kuchipachi} alt="" /> 
            </aside>
            
            <main>
                <h3>Name: Sample</h3>
                <h3>Birthday: 05/14/2023</h3>

                <h3>Hunger: 69</h3>
                <h3>Happiness: 420</h3>
            </main>

            <nav>
                <button>Play</button>
                <button>Feed</button>
                <button>Scold</button>

                <button>Home</button>
                <button>Delete</button>
            </nav>
        </div>
    )
}