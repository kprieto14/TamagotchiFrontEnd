import React from 'react'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import { PetList } from './pages/PetList'
import { PetItemPage } from './pages/PetItemPage'
import { GoodbyePetItemPage } from './pages/GoodbyePetItemPage'

export function App() {
  return (
    <div className='app'>
      <h1>Fake Tamagotchi Site</h1>

      <Router>
        <Routes>
            <Route path='/' element={<PetList/>} />
            <Route path='/items/42' element={<PetItemPage/>}/>
            <Route path='/items/delete/42' element={<GoodbyePetItemPage/>}/>
            <Route path='*' element={<p>Ooops, that URL is unknown.</p>}/>
        </Routes>
      </Router>

      <p>Give photo credits to Ema with link to insta</p>

      <h4>Made with 🫶🏽 in Florida</h4>
    </div>
  )
}
