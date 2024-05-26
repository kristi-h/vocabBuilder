import React from 'react'
import './App.css'
import CardFront from './components/CardFront'
import CardBack from './components/CardBack'
import Buttons from './components/Buttons'
import {hsk3} from './data'

export default function App() {
  const [currWord, setCurrWord] = React.useState({
  Chinese: "",
  Pinyin: "",
  English: "",
  flipped: false,
  correct: false
  }) 
  
  const [toLearn, setToLearn] = React.useState(hsk3)

  function getRandWord() {
    console.log(toLearn)
    const randIndex = Math.floor(Math.random() * toLearn.length)
    const randWord = toLearn[randIndex]
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
    const newArr = toLearn.filter(word => word.English !== currWord.English) 
    setToLearn(newArr)
    getRandWord(newArr)
    endOfDeck()
}

  function incorrectBtn(){
      getRandWord(toLearn)
  }

  function endOfDeck(){
    if (toLearn.length === 0) {
      return "Deck completed: last word!"
    }
  }

return (
<div>
			<header>
				<h1> Vocabulary Builder </h1>
			</header>

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

