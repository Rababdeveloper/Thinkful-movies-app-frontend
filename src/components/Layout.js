import React from 'react';
import { Link, Outlet } from "react-router-dom";
import HeaderImage from '../img/header.jpg';

function Layout() {
    return (
        <div>
            <div style={{
                backgroundImage: "url(" + HeaderImage + ")",
                backgroundSize: "cover",
            }}>
                <div style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}>
                    <div className='container' >
                        <div className='row'>
                            {/* navigation */}
                            <nav className='navbar navbar-expand-lg navbar-light'>
                                <div className='container-fluid'>
                                    <Link className='navbar-brand' to='/'>
                                        <h4 className='logo text-white'><b><i>WeLoveMovies</i></b></h4>
                                    </Link>
                                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                                        <span className='navbar-toggler-icon'></span>
                                    </button>
                                    <div className='collapse navbar-collapse' id='navbarNav'>
                                        <ul className='navbar-nav'>
                                            <li className='nav-item mx-4'>
                                                <Link className='nav-link text-white' to='/movies'>All Movies</Link>
                                            </li>
                                            <li className='nav-item mx-4'>
                                                <Link className='nav-link text-white' to='/theaters'>All Theaters</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className='mt-4 pb-3'>
                            <h2 className='display-4 text-white'>Find your next favorite movie!</h2>
                            <p className='lead text-white'>WeLoveMovies is your source for finding reviews of movies in theatres near you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;