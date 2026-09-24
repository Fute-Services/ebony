

import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import NotFoundPage from './Pages/NotFoundPage'
import Header from './components/Header';
import Navbar from './components/Navbar';
import LocationPage from './Pages/LocationPage';
import Header1 from './components/Header1';
import ProjectDeatailsPage from './Pages/ProjectDetailsPage';
import GalleryPage from './Pages/GalleryPage';
import MasterPlanPage from './Pages/MasterPlanPage';
import TowerPage from './Pages/Tower/TowerPage'
import FloorPlanPage from './Pages/Tower/FloorPlanPage';
// import Ebony_Quality from './Pages/QualityPage';
// import Project from './Pages/Project'
import Project_Status from '../src/Pages/Project_Status'
import Location360 from './Pages/Location360';
function App() {

  const location = useLocation();

  const showNavbar = ["/", "/ebony_location", "/ebony_projecthighlights", "/ebony_gallery", "/ebony_masterplan", "/ebony_project_details",]
  const showHeader = ["/", "/ebony_projecthighlights", "/ebony_masterplan", "/ebony_project_details"]

  const bgHeader = ["/ebony_location",]


  const showNav = showNavbar.includes(location.pathname)
  const showHead = showHeader.includes(location.pathname)

  const isBgHeader = bgHeader.includes(location.pathname)

  return (
    <>
      {showHead && <Header />}
      {showNav && <Navbar />}
      {isBgHeader && <Header1 />}


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/ebony_location" element={<LocationPage />} />
        <Route path="/ebony_projecthighlights" element={<ProjectDeatailsPage />} />
        <Route path="/ebony_masterplan" element={<MasterPlanPage />} />
        <Route path="/360" element={<Location360/>}/>
        <Route path="/ebony_project_details" element={<TowerPage />} />
        <Route path="/project_status" element={<Project_Status />} />
        {/* <Route path="/ebony_project_details" element={<Project />} /> */}
        <Route path="/ebony_towerfloorplan/:id" element={<FloorPlanPage />} />
        {/* <Route path="/ebony_quality" element={<Ebony_Quality />} /> */}
        <Route path="/ebony_gallery" element={<GalleryPage />} />

      </Routes>


    </>
  )
}

export default App
