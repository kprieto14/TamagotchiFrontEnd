import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PetItemType } from "../App";
import BenshisEating from '../assets/BenshisEating.png'
import BenshisIdle from '../assets/BenshisIdle.png'
import BenshisPlaying from '../assets/BenshisPlaying.png'
import BenshisSad from '../assets/BenshisSad.png'
import MoomisEating from '../assets/MoomisEating.png'
import MoomisIdle from '../assets/MoomisIdle.png'
import MoomisPlaying from '../assets/MoomisPlaying.png'
import MoomisSad from '../assets/MoomisSad.png'
import PooshisEating from '../assets/PooshisEating.png'
import PooshisIdle from '../assets/PooshisIdle.png'
import PooshisPlaying from '../assets/PooshisPlaying.png'
import PooshisSad from '../assets/PooshisSad.png'
import pets from "../pets.json"

export function PetItemPage() {
    const params = useParams<{ id: string }>()

    const [ petItem, setPetItem ] =useState<PetItemType>({
        id: undefined,
        name: '',
        birthday: '05/14/1992',
        hungerLevel: 0,
        happinessLevel: 0,
        breed: 'Benshis'
    })

    const [ petPicture, setPetPicture ] = useState<string>()
    const [ pictureDescription, setPictureDescription ] = useState<string>('Picture of a pixelated animal') 

    //This will be used in the future to call the API and load the pet details from there
    useEffect(function() {
        const chosenPet = pets[ Number(params.id) -1 ]
        setPetItem(chosenPet)
        setPetPicture(idlePictures.find(breed => breed.includes(chosenPet.breed)))
    }, [params.id])

    //Subject to change, might make a list for each action instead
    const idlePictures = [ BenshisIdle, MoomisIdle, PooshisIdle ]
    const eatPictures = [ BenshisEating, MoomisEating, PooshisEating ]
    const playPictures = [ BenshisPlaying, MoomisPlaying, PooshisPlaying ]
    const sadPictures = [ BenshisSad, MoomisSad, PooshisSad ]

    function changeEmojiValue() {
        if(petItem.happinessLevel <= 15) {
            return '🙁'
        }
        else if (petItem.happinessLevel >= 16 && petItem.happinessLevel <= 45) {
            return '🙂'
        }
        else if (petItem.happinessLevel >= 46 && petItem.happinessLevel <= 90) {
            return '😊'
        }
        else {
            return '🥰'
        }
    }

    function interactWithPet(interactionType: string) {
        switch(interactionType) {
            case 'play': 
                setPetPicture(playPictures.find(breed => breed.includes(petItem.breed)))
                setPictureDescription('Picture of pixelated animal playing with an object')
                //Line of code that will send a POST request
                break;
            
            case 'feed':
                setPetPicture(eatPictures.find(breed => breed.includes(petItem.breed)))
                setPictureDescription('Picture of pixelated animal eating something')
                //Line of code that will send a POST request
                break;
            
            case 'scold':
                setPetPicture(sadPictures.find(breed => breed.includes(petItem.breed)))
                setPictureDescription('A sad picture of pixelated animal')
                //Line of code that will send a POST request but even that feels DRY hmmm
                break;
            
            default:
                console.log("Something went wrong")
                break;
        }
    }

    return (
        <div>
            <h2>{petItem.name}</h2>
            
            <main>
                <aside>
                    <img src={petPicture} alt={pictureDescription} /> 
                </aside>

                <ul className="pet-information">
                    <li>Breed: {petItem.breed}</li>
                    <li>Birthday: {petItem.birthday}</li>
                    <li>🍖: {petItem.hungerLevel}</li>
                    <li>{changeEmojiValue()}: {petItem.happinessLevel}</li>
                </ul>
            </main>

            <nav>
                <h3>What would you like to do?</h3>

                <div>
                    <button onClick={() => interactWithPet('play')}>Play</button>
                    <button onClick={() => interactWithPet('feed')}>Feed</button>
                    <button onClick={() => interactWithPet('scold')}>Scold</button>
                </div>

                <div>
                    <Link to="/"><button>Home</button></Link>
                    <Link to={`/items/delete/${params.id}`}><button>Delete</button></Link>
                </div>
            </nav>
        </div>
    )
}