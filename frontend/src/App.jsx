import React from 'react'
import Home from './components/frontend/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/frontend/About'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App