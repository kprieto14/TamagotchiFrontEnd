import React from "react"
import pets from '../pets.json'
import { PetItem } from "../components/PetItem"
import { Link } from "react-router-dom"

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
                        birthday={pet.birthday}
                        hungerLevel={pet.hungerLevel}
                        happinessLevel={pet.happinessLevel}
                        breed={pet.breed}
                    />
                ))}
            </main>

            <Link to={'/new'}><button>Make a New Pet</button></Link>
        </div>
    )
}