import React from 'react'
import './App.css'
import CardFront from './components/CardFront'
import CardBack from './components/CardBack'
// import file from './data.csv'
import hsk3 from './hsk3.csv'
import * as Papa from 'papaparse';

export default function App() {
  const [currWord, setCurrWord] = React.useState({
  chinese: "",
  pinyin: "",
  english: ""
  }) 

  const [toLearn, setToLearn] = React.useState(data)

  React.useEffect(()=> {
    fetch( hsk3 )
    .then( response => response.text() )
    .then( responseText => {
        var data = Papa.parse(responseText);
        console.log('data:', data);
    });
  }, []) 

  function getRandWord() {
    const randIndex = Math.floor(Math.random * data.length)
    const randWord = toLearn[randIndex]
    setCurrWord(randWord=> {
      chinese: randWord.chinese;
      pinyin: randWord.pinyin;
      english: randWord.english,
    })

  function flipCard() {
    <CardBack 
      chinese= {currWord.chinese}
      pinyin= {currWord.pinyin}
      />
  }

  function handleCorrectBtn(){
      setToLearn(prev => {
        prev.filter(currentWord=>!currentWord)
      })
      getRandWord(toLearn)
  }

  function handleIncorrectBtn(){
      getRandWord(toLearn)
  }

  function endOfDeck(){
    if (toLearn.length === 0) {
      return "Deck completed: last word!"
    }
  }

return (
  <>
    <div>
      <h1 className='title'>Vocabulary Builder</h1>
      <CardFront
        english= {currWord.english}
      />
    </div>
    <p>{getRandWord}</p>
  </>
)
}

}