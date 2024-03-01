import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeidPage from './pages/PokeidPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/pokedex" element={<PokedexPage/>}/>
        <Route path="/pokedex/:id" element={<PokeidPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
