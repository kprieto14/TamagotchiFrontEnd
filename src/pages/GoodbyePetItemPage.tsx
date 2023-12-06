import React from "react";
import Kuchipachi from '../KuchipatchiFrontFacing.webp'
import { Link } from "react-router-dom";

export function GoodbyePetItemPage() {
    return (
        <div>
            <h2>Pet Name Here</h2>

            <main>
                <img src={Kuchipachi} alt="" /> 
            </main>

            <nav>
                <h3>Are you sure you want to get rid of "PET NAME"? :(</h3>

                <div>
                    <Link to="/items/42"><button>BACK</button></Link>
                    <button className="delete">YES</button>
                </div>
            </nav>
        </div>
    )
}