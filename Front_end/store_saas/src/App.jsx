import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Sidebar from './Sidebar'
import Home from './Pages/Home'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
