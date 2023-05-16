import React from 'react'
import './navbar.css'
import Logo from '../../assets/images/EDYODA.png'


function StaticNavbar() {
    return (
        <React.Fragment >
            <nav className='navbar navbar-white bg-white navbar-expand-sm '>
                <div className='container'>
                    <a href="/" className='navbar-brand text-primary custom-title' id="title">
                    <img src={Logo} alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id="navbarSupportedContent">
                        <ul className='navbar-nav mx-4'>
                            <li className='navbar-item mx-4'>
                                courses <span className="bi bi-chevron-down" ></span>

                            </li>
                            <li className='navbar-item mx-4'>
                                programs <span className='bi bi-chevron-down'></span>

                            </li>
                        </ul>
                        <ul className='navbar-nav ml-auto '>
                            <li className='navbar-item mx-4 mt-3'>
                                <span className='bi bi-search'></span>
                            </li>
                            <li className='navbar-item mx-4 mt-3'>
                                Login
                            </li>
                            <li className='navbar-item mx-4 mt-2'>
                                <button className="btn btn-primary btn-sm custom-btn rounded rounded-5">Join Now</button>
                            </li>
                            
                        </ul>

                    </div>

                </div>


            </nav>
        </React.Fragment>
    )
}

export default StaticNavbar