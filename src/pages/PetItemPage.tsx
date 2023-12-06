import React from "react";
import Kuchipachi from '../KuchipatchiFrontFacing.webp'
import { Link } from "react-router-dom";

export function PetItemPage() {
    function changeEmojiValue() {
        //Major ifs statements regarding happiness levels
        return '😊'
    }

    return (
        <div>
            <h2>Pet Name Here</h2>
            
            <main>
                <aside>
                    <img src={Kuchipachi} alt="" /> 
                </aside>

                <ul className="pet-information">
                    <li>🍖: 69</li>
                    <li>{changeEmojiValue()}: 420</li>
                </ul>
            </main>

            <nav>
                <h3>What would you like to do?</h3>

                <div>
                    <button>Play</button>
                    <button>Feed</button>
                    <button>Scold</button>
                </div>

                <div>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/items/delete/42"><button>Delete</button></Link>
                </div>
            </nav>
        </div>
    )
}