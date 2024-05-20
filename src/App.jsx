import './App.css'
import CardFront from './components/CardFront'
import CardBack from './components/CardBack'

function App() {

  return (
    <>
      <div>
        <h1>project</h1>
        {!<CardFront />? <CardBack />: <CardFront />}
      </div>
    </>
  )
}

export default App
