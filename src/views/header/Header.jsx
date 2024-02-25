import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import ModalG from './ModalG';
import Trajetoria from '../main/components/Trajetoria';


function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      
        <div className="header">

            <nav className="container navbar navbar-expand-sm navbar-dark">
              <div className="container-fluid">
                <div className="title">
                  <a className="navbar-brand fs-2" href="#">Darlison Silva</a>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={toggleNav}>
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="collapsibleNavbar">
                  <ul className="navbar-nav fs-4">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={handleShow}>Projeto</a>
                      <ModalG show={showModal} handleClose={handleClose} />
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/trajetoria">Jornada</Link>
                    </li> 
                    
                  </ul>
                </div>
              </div>
            </nav>

            <Routes>
              <Route path="/trajetoria" component={Trajetoria} />
            </Routes>

        </div>

      
    )
}

export default Header;