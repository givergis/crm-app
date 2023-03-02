import React from 'react'
import NavBar from './NavBar'
import './LoginForm.css'

function PageNotFound() {
  return (
    <div>
        <NavBar/>
    <div className='pagenotfound'>
    <h3 style={{color:'red'}}>404 - Page Not Found.</h3>
    <p style={{color:'red'}}>We are sorry but the page you are looking for does not exist.</p>
    </div>
    </div>
    
  )
}

export default PageNotFound