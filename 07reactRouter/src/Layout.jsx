import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

//rfce
function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>//Here the outlet used so that all other element can be change in between and header and footer are be in still position 
      <Footer/>
    </>
  )
}

export default Layout
