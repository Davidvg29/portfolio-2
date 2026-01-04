import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProjectsPage from './pages/ProjectsPage'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import ProjectOnePage from './pages/ProjectsOnePage'
import PageNotFound from './pages/PageNotFound'
import AlertMessage from './components/AlertMessage'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portafolio" element={<ProjectsPage/>} />
        <Route path="/portafolio/proyecto/:name" element={<ProjectOnePage/>} />
        <Route path="/contacto" element={<ContactPage/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <AlertMessage/>
    </div>
  )
}

export default App
