import React from 'react'
import './App.css'
import CardFront from './components/CardFront'
import CardBack from './components/CardBack'
import Buttons from './components/Buttons'
import {hsk3} from './data'
import BatchButtons from './components/BatchButtons'

export default function App() {
  const [currWord, setCurrWord] = React.useState({
  Chinese: "",
  Pinyin: "",
  English: "",
  flipped: false,
  correct: false
  }) 
  
  const [toLearn, setToLearn] = React.useState(hsk3)
  const [batch, setBatch] = React.useState([])

  React.useEffect(()=>{
    function createBatches(){
      // update toLearn with subarrays of batches
      const batches = []
      for (let i=0; i <toLearn.length; i++){
        batches.push(toLearn.slice(i, i+35))
        i+=35
      }
      setToLearn(batches)
    }
    createBatches()
  },[])
  console.log("toLearn", toLearn)
  
  function handleBatchClick(e){
    // selected batch number is used to get index of corresponding batch subarray in toLearn
    const batchSelected = e.target.value 
    setBatch(toLearn[batchSelected -1])
  }

  function getRandWord() {
    console.log(toLearn)
    const randIndex = Math.floor(Math.random() * batch.length)
    const randWord = batch[randIndex]
    console.log("randword", randWord)
    setCurrWord({
      Chinese: randWord.Chinese,
      Pinyin: randWord.Pinyin,
      English: randWord.English,
      flipped: false,
      correct: false
    })
  }

  function flipCard() {
    setCurrWord({
      ...currWord,
      flipped: !currWord.flipped
    })
  }
  function correctBtn(){
    const newArr = batch.filter(word => word.English !== currWord.English) 
    setBatch(newArr)
    getRandWord(newArr)
    endOfDeck()
}

  function incorrectBtn(){
      getRandWord(batch)
  }

  function endOfDeck(){
    if (batch.length === 0) {
      return "Deck completed: last word!"
    }
  }

return (
<div>
			<header>
				<h1> Vocabulary Builder </h1>
			</header>
    
      <BatchButtons 
        toLearn={toLearn}
        handleClick={handleBatchClick}
      />

      <button className="start-btn" onClick={()=>getRandWord()}>Start studying!</button>
			<div onClick= {flipCard} className={`card ${currWord.flipped? "flipped": "" }`}>
				<div className="card-inner">
          {currWord.flipped? 
              <CardBack 
              word= {currWord}
              handleClick= {flipCard}
              /> 
              :<CardFront 
              word= {currWord}
              handleClick= {flipCard}
              />
          }
				</div>
			</div>
      <Buttons 
        handleCorrect={correctBtn}
        handleIncorrect={incorrectBtn}/>
		</div>
)
}

