import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  shadow-sm fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/nosotros" className="nav-link">Nosotros</Link>
            </li>
            <li className="nav-item">
              <NavLink to={`/productos/celular`} className="nav-link">Celulares</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/productos/tablet`} className="nav-link">Tablets</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/productos/notebook`} className="nav-link">Notebooks</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item nav-link ">
              <CartWidget/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
