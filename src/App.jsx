import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/frontend/Home'
import AdminPanel from './pages/backend/AdminPanel'
import Login from './pages/frontend/Login'
import SignUp from './pages/frontend/SignUp'

export default function App() {

  return (
    
    <BrowserRouter>
      <Routes path='/*'>
        <Route path='/*' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/admin/*' element={<AdminPanel/>} />
      </Routes>
    </BrowserRouter>
    
  )
}