import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Projects from './pages/Projects'
import Admin from './admin/Admin'
import AdminExperience from './admin/AdminExperience'
import AdminSkills from './admin/AdminSkills'
import AdminProjects from './admin/AdminProjects'
import AdminLogin from './admin/AdminLogin'
import AdminAddExperience from './admin/AdminAddExperience'
import AdminEditExperience from './admin/AdminEditExperience'
import AdminAddSkills from './admin/AdminAddSkills'
import AdminCompany from './admin/AdminCompany'
import AdminAddCompany from './admin/AdminAddCompany'
import AdminAddProject from './admin/AdminAddProject'
import AdminEditSkills from './admin/AdminEditSkills'
import AdminSignup from './admin/AdminSignup'
import AdminEditCompany from './admin/AdminEditCompany'
import AdminEditProjects from './admin/AdminEditProjects'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />

        {/* admin */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/experience' element={<AdminExperience />} />
        <Route path='/addexperience' element={<AdminAddExperience />} />
        <Route path='/experience/:id' element={<AdminEditExperience />} />
        <Route path='/skills' element={<AdminSkills />} />
        <Route path='/addskills' element={<AdminAddSkills />} />
        <Route path='/skills/:id' element={<AdminEditSkills />} />
        <Route path='/company' element={<AdminCompany />} />
        <Route path='/addcompany' element={<AdminAddCompany />} />
        <Route path='/company/:id' element={<AdminEditCompany />} />
        <Route path='/adminprojects' element={<AdminProjects />} />
        <Route path='/addprojects' element={<AdminAddProject />} />
        <Route path='/adminprojects/:id' element={<AdminEditProjects />} />
        <Route path='/login' element={<AdminLogin />} />
        <Route path='/signup' element={<AdminSignup />} />
      </Routes>
    </>
  )
}

export default App
