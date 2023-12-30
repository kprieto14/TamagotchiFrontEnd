import React from "react";
import { Link } from "react-router-dom";
import Benshis from '../assets/BenshisIdle.png'
import Moomis from '../assets/MoomisIdle.png'
import Pooshis from '../assets/PooshisIdle.png'
import { PetItemType } from "../App";

export function PetItem(props: PetItemType) {
    const petPictureArray = [Benshis, Moomis, Pooshis]
    
    return (
        <article>
            <img src={petPictureArray.find(breed => breed.includes(props.breed))} alt="Picture of a pixelated animal"/>
            <h3>{props.name}</h3>
            <Link to={`/items/${props.id}`}><button className='pet-button'>Details</button></Link>
        </article>
    )
}