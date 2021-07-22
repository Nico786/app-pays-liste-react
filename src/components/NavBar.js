import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                    <Link to="/" exact className="nav-link">Page d'accueil</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/pays" exact className="nav-link">Les pays</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
)

export default NavBar;