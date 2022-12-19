import React from 'react'
import Header from './Header'
import Footer from '../footer/Footer'
import TemporaryDrawer from './Test'

const Layout = (props) => {
  return (
    <div>
        <TemporaryDrawer/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default Layout