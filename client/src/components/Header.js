import React from 'react'
import '../css/Header.css'
import Logo from '../assets/logo.png';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg'
import { ReactComponent as LocationIcon } from '../assets/icons/location.svg'
import { ReactComponent as IndiaFlagIcon } from '../assets/icons/india-flag.svg'
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg'
import { ReactComponent as DownArrowIcon } from '../assets/icons/down-arrow.svg'
const Header = () => {
    return (
        <header className="main__header horizontal__flex">
            <div className="logo__container" >
                <img src={Logo} />
            </div>
            <div className="location__container horizontal__flex" >
                <span><LocationIcon /> </span>
                <div className="vertical__flex">
                    <span>{"Deliver to suhas"}</span>
                    <span>{"Karad 415111"}</span>
                </div>
            </div>
            <div className="search__container horizontal__flex" >
                <div className="category__selector__container horizontal__flex" >
                     <span>All</span>
                     <DownArrowIcon /></div>
                <input className="search__product" type="text" />
                <span className="horizontal__flex"><SearchIcon /></span>
            </div>
            <div className=" horizontal__flex language__container" >
            <span><IndiaFlagIcon /></span>
            <span className="drop__down"> <DownArrowIcon /> </span>
            </div>
            <div className="acc__list__container vertical__flex" >
            <span>hello Suhas</span>
            <span>{"Accounts & Lists"}</span>
            </div>
            <div className="return__order__container vertical__flex" >
            <span>Returns</span>
            <span>{"& Orders"}</span>
            </div>
            <div className="cart__container" >
            <span><CartIcon /></span>
            </div>


        </header>
    )
}

export default Header
