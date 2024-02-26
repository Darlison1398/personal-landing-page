import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import ModalG from './ModalG';
import Trajetoria from '../main/components/Trajetoria';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolder, faArrowUpWideShort  } from '@fortawesome/free-solid-svg-icons';

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
                  <a className="navbar-brand fs-2" href="#">DrSilva</a>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={toggleNav}>
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="collapsibleNavbar">
                  
                  <ul className="navbar-nav fs-4">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        <div>
                          <span className='faIcon'><FontAwesomeIcon icon={faHome} /></span>
                        </div>
                        <div>
                          <span className='nav-text'>Home</span>
                        </div> 
                      </Link>
                    </li>
                    
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={handleShow}>
                        <div>
                          <span className='faIcon'><FontAwesomeIcon icon={faFolder} /></span>
                        </div>
                        <div>
                          <span className='nav-text'>Projeto</span>
                        </div>
                      </a>
                      <ModalG show={showModal} handleClose={handleClose} />
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/trajetoria">
                        <div>
                          <span className='faIcon'><FontAwesomeIcon icon={faArrowUpWideShort} /></span>
                        </div>
                        <div>
                          <span className='nav-text'>Jornada</span>
                        </div>
                      </Link>
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