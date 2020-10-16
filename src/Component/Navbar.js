import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';


function Navbar() {
    return (
        <div className="TopNav">
         <div className="SubTopNav">
                <div className="NavImg">
                <Link to="/">
                    <img src={logo} alt="company's logo"
                    className="logo"/>
                </Link>
                </div>
                {/* <div className="NavListing"> */}
                        <ul>
                            <Link to="/Facilities">
                                <li>Facilities</li>
                            </Link>
                            {/* <Link to="/Contact">
                                <li>Contact</li>
                            </Link> */}
                            <Link to="/Contact">
                                <li>Contact</li>
                            </Link>
                            <Link to="/AboutUs">
                                <li>About Us</li>
                            </Link>
                        </ul>
                {/* </div> */}
         </div>
        </div>
    )
}

export default Navbar
