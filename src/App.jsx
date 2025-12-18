import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProjectsPage from './pages/ProjectsPage'
import Home from './pages/Home'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<ProjectsPage/>} />
      </Routes>
    </div>
  )
}

export default App
