import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Sidebar from './Sidebar'
import Home from './Pages/Home'
import Abrircaixa from './Pages/Abrircaixa'
import Vendas from './Pages/Vendas'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/caixa' element={<Abrircaixa />} />
          <Route path='/vendas' element={<Vendas />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
