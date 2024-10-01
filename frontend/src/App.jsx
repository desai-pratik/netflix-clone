import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/HomePage'
import AuthPage from './pages/home/AuthPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {
  const user =false;

  return (
    <Routes>
      <Route path="/" element={user ? <HomePage /> : <AuthPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
}

export default App
