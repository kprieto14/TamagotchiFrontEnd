import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PetItemType } from "../App";
import BenshisSad from '../assets/BenshisSad.png'
import MoomisSad from '../assets/MoomisSad.png'
import PooshisSad from '../assets/PooshisSad.png'
import GoodbyeBenshis from '../assets/BenshisGoodbye.png'
import GoodbyeMoomis from '../assets/MoomisGoodbye.png'
import GoodbyePooshis from '../assets/PooshisGoodbye.png'
import pets from "../pets.json"

export function GoodbyePetItemPage() {
    const params = useParams<{ id: string }>()

    const [ petItem, setPetItem ] = useState<PetItemType>({
        id: undefined,
        name: '',
        birthday: '05/14/1992',
        hungerLevel: 0,
        happinessLevel: 0,
        breed: 'Benshis'
    })

    const [ petPicture, setPetPicture ] = useState<string>()
    const [ pictureDescription, setPictureDescription ] = useState<string>('Picture of a sad pixelated animal')

    const sadPictures = [ BenshisSad, MoomisSad, PooshisSad ]
    const goodByePictures = [ GoodbyeBenshis, GoodbyeMoomis, GoodbyePooshis ]

    const [ petIsGone, setPetIsGone ] = useState<boolean>(false)

    //This will be used in the future to call the API and load the pet details from there
    useEffect(function() {
        const chosenPet = pets[ Number(params.id) -1 ]
        setPetItem(chosenPet)
        setPetPicture(sadPictures.find(breed => breed.includes(chosenPet.breed)))
    }, [params.id])

    function handleDeletePet() {
        //Code here to request DELETE to API
        setPetPicture(goodByePictures.find(breed => breed.includes(petItem.breed)))
        setPictureDescription('Image of pixelated animal walking away')
        setPetIsGone(true)
    }

    const header = petIsGone ? `Good bye ${petItem.name}` : "Oh no!"
    const subtext = petIsGone ? 'We will miss you :(' : `Are you sure you want to get rid of ${petItem.name} :(`
    const link = petIsGone ? '/' : `/items/${params.id}`

    return (
        <div>
            <h2>{header}</h2>

            <main>
                <img src={petPicture} alt={pictureDescription} /> 
            </main>

            <nav>
                <h3>{subtext}</h3>

                <div>
                    <Link to={link}><button>BACK</button></Link>
                    <button className={petIsGone ? 'invisible delete' : 'delete'} onClick={handleDeletePet}>YES</button>
                </div>
            </nav>
        </div>
    )
}