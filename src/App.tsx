import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import { PetList } from './pages/PetList'
import { PetItemPage } from './pages/PetItemPage'
import { GoodbyePetItemPage } from './pages/GoodbyePetItemPage'
import { NewPetPage } from './pages/NewPetPage'

export type PetItemType = {
  id: number | undefined
  name: string
  birthday: string
  hungerLevel: number
  happinessLevel: number
  breed: string
}

export function App() {
  return (
    <div className='app'>
      <h1>Fake Tamagotchi Site</h1>

      <Routes>
          <Route path='/' element={<PetList/>} />
          <Route path='/new' element={<NewPetPage/>} />
          <Route path='/items/:id' element={<PetItemPage/>}/>
          <Route path='/items/delete/:id' element={<GoodbyePetItemPage/>}/>
          <Route path='*' element={<p>Ooops, that URL is unknown.</p>}/>
      </Routes>

      <p>All photos of pets were created by the lovely & talented, <a href="https://www.instagram.com/emitosauro/">Emitosauro</a></p>

      <h4>Made with 🫶🏽 in Florida</h4>
    </div>
  )
}
