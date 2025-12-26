import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Components/login'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Signup from './Components/Signup'
import Profile from './Components/Profile'
import Address from './Components/Address'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/address" element={<Address />} />
    </Routes>
  )
}



export default App