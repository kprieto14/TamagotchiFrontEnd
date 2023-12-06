import React from "react";
import { Link } from "react-router-dom";
import Kuchipachi from '../KuchipatchiFrontFacing.webp'

type Pet = {
    id: number,
    name: string,
    hungerLevel: number,
    happinessLevel: number
}

export function PetItem(props: Pet) {
    return (
        <article>
            <h3>{props.name}</h3>
            <img src={Kuchipachi} alt="Picture of a pixelated animal"/> 
            <Link to="/items/42"><button className='pet-button'>Details</button></Link>
        </article>
    )
}