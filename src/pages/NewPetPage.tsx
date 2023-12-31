import React, { useState } from "react";
import BenshisIdle from '../assets/BenshisIdle.png'
import MoomisIdle from '../assets/MoomisIdle.png'
import PooshisIdle from '../assets/PooshisIdle.png'
import petNames from '../pet-names.json'
import { Link } from "react-router-dom";

export function NewPetPage() {
    const petPictures = [ BenshisIdle, MoomisIdle, PooshisIdle ]

    const [ petName, setPetName ] = useState<string>(petNames[0])
    const [ petPicture, setPetPicture ] = useState<string | undefined>(petPictures[0])
    const [ newPetCreated, setNewPetCreated ] =useState<boolean>(false)
    const [ subtext, setSubText ] = useState<string>('What would you like to do?')

    function handleNewPet() {
        let newPetName = petName
        //Code here to handle API to create new pet
        if(petName === '') {
            setSubText('Please name your pet')
            return
        }
        
        setNewPetCreated(true)
        setSubText(`Welcome ${newPetName} to the digital world!`)
    }

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
                    <li><input type="text" onChange={e => setPetName(e.target.value)} value={petName}/></li>
                    <button onClick={() => setPetName(petNames[Math.floor(Math.random() * 395)])}>Random Name</button>
                </ul>
            </main>

            <nav>
                <h3>{subtext}</h3>

                <div>
                    <Link to="/"><button>Home</button></Link>
                    <button onClick={handleNewPet} className={newPetCreated ? 'invisible' : undefined}>Create</button>
                    {/* Link here that will go directly to new pet page */}
                </div>
            </nav>
        </div>
    )
}