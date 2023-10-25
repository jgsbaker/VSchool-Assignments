import { useState } from 'react'
import {MusicContextProvider} from "./pages/components/MyContext"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Demos from "./pages/Demos"
import './App.css'
function App() {
  return (
    <MusicContextProvider>
      <Router>
        <nav>
          <Link to="/" style={{padding: 5}}>Home</Link>
          <Link to="/about" style={{padding: 5}}>About</Link>
          <Link to="/contact" style={{padding: 5}}>Contact</Link>
          <Link to="/demos" style={{padding: 5}}>Demos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/demos" element={<Demos />} />
        </Routes>
      </Router>
    </MusicContextProvider>
  )
}

export default App
