import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Hosting from './pages/Hosting'
import Cloud from './pages/Cloud'
import Servers from './pages/Servers'
import Resources from './pages/Resources'
import NotFound from './pages/NotFound'
import ComingSoonAuth from './pages/ComingSoonAuth'
import Domain from './pages/Domain'
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/resources" element={<Resources />} />
          <Route path="/coming-soon-auth/:type" element={<ComingSoonAuth />} />
           <Route path="/domains" element={<Domain />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App