import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Hosting from './pages/Hosting'
import NotFound from './pages/NotFound'
import ComingSoonAuth from './pages/ComingSoonAuth'
import Domain from './pages/Domain'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/hosting" element={<Hosting />} />
          <Route path="/coming-soon-auth" element={<ComingSoonAuth />} />
           <Route path="/domains" element={<Domain />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App