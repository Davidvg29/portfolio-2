import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProjectsPage from './pages/ProjectsPage'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import ProjectOnePage from './pages/ProjectsOnePage'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<ProjectsPage/>} />
        <Route path="/portfolio/project/:name" element={<ProjectOnePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </div>
  )
}

export default App
