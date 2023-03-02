import React from 'react'
import './NavBar.css'; 

function NavBar() {
  return (
    <div className='Navmain'>
     <nav class="navbar navbar-expand-sm navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">AMP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar