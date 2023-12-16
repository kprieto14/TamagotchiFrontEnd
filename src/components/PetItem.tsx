import React from "react";
import { Link } from "react-router-dom";
import Benshis from '../assets/Benshis/Idle.png'
import Moomis from '../assets/Moomis/Idle.png'
import Pooshis from '../assets/Pooshis/Idle.png'

type Pet = {
    id: number,
    name: string,
    hungerLevel: number,
    happinessLevel: number,
    breed: string
}

export function PetItem(props: Pet) {
    const petPictureArray = [Benshis, Moomis, Pooshis]
    
    return (
        <article>
            <img src={petPictureArray.find(breed => breed.includes(props.breed))} alt="Picture of a pixelated animal"/>
            <h3>{props.name}</h3>
            <Link to="/items/42"><button className='pet-button'>Details</button></Link>
        </article>
    )
}