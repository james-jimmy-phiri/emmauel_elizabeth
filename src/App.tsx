import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ClassicHomePage from './pages/ClassicHomePage'
import OurStoryPage from './pages/OurStoryPage'
import ProgramPage from './pages/ProgramPage'
import GalleryPage from './pages/GalleryPage'

function AppContent() {
  const { pathname } = useLocation()
  const isClassic = pathname === '/classic'

  return (
    <>
      <ScrollToTop />
      {!isClassic && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classic" element={<ClassicHomePage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/schedule" element={<ProgramPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      {!isClassic && <Footer />}
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App

