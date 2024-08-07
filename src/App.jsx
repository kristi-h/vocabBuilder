import React from 'react'
import './App.css'
import CardFront from './components/CardFront'
import CardBack from './components/CardBack'
import Buttons from './components/Buttons'
import {hsk3} from './chineseData'
import BatchButtons from './components/BatchButtons'

export default function App() {
  const [currWord, setCurrWord] = React.useState({
  Chinese: "",
  Pinyin: "",
  English: "",
  flipped: false,
  correct: false
  }) 
  
  const [lang, setLang] = React.useState()
  const [toLearn, setToLearn] = React.useState(hsk3)
  const [batch, setBatch] = React.useState([])
  const [isStudying, setIsStudying] = React.useState(false)
  const [showBatches, setShowBatches] = React.useState(false)

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

  function showBatchBtns(){ 
    console.log("batchbtnclick")
    setShowBatches(!showBatches)
  }

  function handleBatchClick(e){
    // selected batch number is used to get index of corresponding batch subarray in toLearn
    const batchSelected = e.target.value 
    console.log(batchSelected)
    setBatch(toLearn[batchSelected -1])
    getRandWord()
  }

  function startStudy(){
    getRandWord()
    setShowBatches(showBatches === false)
    setIsStudying(!isStudying)
  }

  function getRandWord() {
    console.log("batch", batch)
    const randIndex = Math.floor(Math.random() * batch.length)
    const randWord = batch[randIndex]
    
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
      return setIsStudying(isStudying === false)
    }
  }

  function chooseLang(){
    const list = ["Spanish", "Mandarin"]
    if (list.indexOf(lang)=== list.length-1){
      setLang(list[0])
    } else {
      setLang(list.indexOf(lang)+1)
    }
  }

return (
<div className='game-container'>
  <div className='header-container'>
			<header>
				<h1> Vocabulary Builder </h1>
			</header>
  </div>
  <div className='batch-container'>
      {showBatches && <BatchButtons 
      toLearn={toLearn}
      handleBatchClick={handleBatchClick}
      startBtn={startStudy}
      />}
  </div>
      <button  className="choose-lang" onClick={chooseLang}> {lang} </button>
      <button  className="enter-batch-btn" onClick={showBatchBtns}> Pick a batch</button>
      
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

