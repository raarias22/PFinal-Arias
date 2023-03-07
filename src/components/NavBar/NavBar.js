import React from 'react';
import link, { Link } from 'react-router-dom'
import CartWidget from '../NavBar/CartWidget'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/' >
          <img src='./762-7624474_guitarra-png.png' width='50' />   Harmony's Music Store 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Tienda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <CartWidget/>
                </Link>
              </li>
             
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscador"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscador
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
