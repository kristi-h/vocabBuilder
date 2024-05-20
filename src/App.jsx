import { useState } from 'react'
import './App.css'
import {CardFront} from './components/card_front'
import {CardBack} from './components/card_back'

function App() {

  return (
    <>
      <div>
        <CardFront />
        <CardBack />
      </div>
    </>
  )
}

export default App
