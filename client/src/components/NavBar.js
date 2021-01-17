import React from 'react';
import '../css/NavBar.css';
import Logo2 from '../assets/logo-2.png';

const NavBar = () => {
    return (
        <nav className="nav__sencondary horizontal__flex">
            <ul className="horizontal__flex nav__container">
                <li>Best Sellers</li>
                <li>Todays Deals</li>
                <li>Mobiles</li>
                <li>Prime</li>
                <li>New Releases</li>
                <li>Fassion</li>
                <li>Customer Services </li>
                <li>Amazon Pay</li>
                <li>Electronics</li>
                
            </ul> 
            <div className="nav__logo"><img  src={Logo2} /> </div>
        </nav>
    )
}

export default NavBar
