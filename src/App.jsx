import React from 'react'
import './App.css'
import CardFront from './components/CardFront'
import CardBack from './components/CardBack'
import file from 'data.csv'

function App() {

  const changeHandler = (event) => {
    console.log(event.target.files[0])
  };
  

  return (
    <>
      <div>
        <h1 className='title'>Vocabulary Builder</h1>
        {!<CardFront />? <CardBack />: <CardFront />}
      </div>

      <div>
        {/* File Uploader */}
        <input
          type="file"
          name="file"
          accept=".csv"
          style={{ display: "block", margin: "10px auto" }}
        />
      </div>
    </>
  )
}

export default App
