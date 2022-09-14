import Mood from './mood/Mood'
import './App.css'

function App() {

  return (
    <>
      <h1>My Mood App</h1>
      <div>
        <Mood moodInput="Happy" moodRating={9} />
      </div>
    </>
  )
}

export default App
