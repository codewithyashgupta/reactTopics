import React from 'react'
import { Route, Routes } from "react-router-dom"
import  Home  from ".././Components/Home.jsx"
import  Contact  from ".././Components/Contact.jsx"
import  About  from ".././Components/About.jsx"
import User from '../Components/User.jsx'


function Routing() {
  return (
    <>
     <Routes>
          <Route path = "/" element= {<Home />} />
          <Route path = "/about" element= {<About />} />
          <Route path = "/contact" element= {<Contact />} />
          <Route path = "/user" element= {<User />} />

      </Routes>
    </>
  )
}

export default Routing
