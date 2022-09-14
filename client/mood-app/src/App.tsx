import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mood from './components/Mood'
import MoodForm from './components/MoodForm'
import MoodEdit from './components/MoodEdit'
import './App.css'

function App() {

  return (
    <Router>
      <h1>My Mood App</h1>
      <div>
        <Routes>
          <Route path="/" element={<Mood />} />
          <Route path="/add" element={<MoodForm />} />
          <Route path="/edit/:id" element={<MoodEdit />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
