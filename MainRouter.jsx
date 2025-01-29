import React from 'react'
 import { Route, Routes } from 'react-router-dom'
 import Home from './components/Home'
 import About from './src/About'
 import Contact from './src/Contact'
 import Services from './src/Services'
//  import Education from './src/education'
 import Projects from './src/Projects'
//  import Layout from ‘./components/Layout’

const MainRouter = () => {
 return (<div>
 {/* <Layout/> */}
 <Routes>
 <Route exact path="/" element={<Home />} />
 <Route exact path="/about" element={<About />} />
 {/* <Route exact path="/education" element={<Education />} /> */}
  <Route exact path="/projects" element={<Projects />} /> 
 <Route exact path="/contact" element={<Contact />} />
 <Route exact path="/Services" element={<Services />} /> 

 </Routes>
 </div>
 )
 }
 export default MainRouter


