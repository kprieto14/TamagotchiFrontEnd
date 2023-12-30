import React, { useState } from "react";
import BenshisIdle from '../assets/Benshis/Idle.png'
import MoomisIdle from '../assets/Moomis/Idle.png'
import PooshisIdle from '../assets/Pooshis/Idle.png'
import petNames from '../pet-names.json'
import { Link } from "react-router-dom";

export function NewPetPage() {
    const petPictures = [ BenshisIdle, MoomisIdle, PooshisIdle ]

    const [ petName, setPetName ] = useState<string>(petNames[0])
    const [ petPicture, setPetPicture ] = useState<string | undefined>(petPictures[0])

    return (
        <div>
            <h2>Create a Pet</h2>
            
            <main>
                <aside>
                    <img src={petPicture} alt='picture of a virtual pet' /> 
                </aside>

                <ul className="pet-information">
                    <li><label htmlFor="pet-select">Select a breed:</label></li>

                    <select name="pets" id="pet-select" onChange={e => setPetPicture(petPictures.find(breed => breed.includes(e.target.value)))}>
                        <option value="Benshi">Benshis</option>
                        <option value="Moomis">Moomis</option>
                        <option value="Pooshis">Pooshis</option>
                    </select>

                    <li>Pet Name:</li>
                    <li><input type="text" placeholder={petName}/></li>
                    <button onClick={() => setPetName(petNames[Math.floor(Math.random() * 395)])}>Random Name</button>
                </ul>
            </main>

            <nav>
                <h3>What would you like to do?</h3>

                <div>
                    <Link to="/"><button>Home</button></Link>
                    <button>Create</button>
                </div>
            </nav>
        </div>
    )
}