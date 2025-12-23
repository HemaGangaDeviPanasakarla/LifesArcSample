import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Components/login'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Signup from './Components/signup'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}



export default App