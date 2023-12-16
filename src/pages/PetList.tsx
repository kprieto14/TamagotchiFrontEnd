import React from "react"
import pets from '../pets.json'
// import { Link } from "react-router-dom"
import { PetItem } from "../components/PetItem"

export function PetList() {

    return (
        <div className="pet-list-page">
            <h2>Choose your pet</h2>
            
            <main>
                {pets.map(pet => (
                    <PetItem
                        key={pet.id}
                        id={pet.id}
                        name={pet.name}
                        hungerLevel={pet.hungerLevel}
                        happinessLevel={pet.happinessLevel}
                        breed={pet.breed}
                    />
                ))}
            </main>

            <button>Make a New Pet</button>
        </div>
    )
}