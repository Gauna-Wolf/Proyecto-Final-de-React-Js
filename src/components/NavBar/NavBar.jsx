import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Shop</Link>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="#">Productos</Link></li>
            <li><Link to="#">Contacto</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
