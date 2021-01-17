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
            <div className="header__left horizontal__flex">
            <CompaneyLogo />
            <LocationViewer />
            </div>
            
            <SearchBar />
            <div className="header__right horizontal__flex">
            <LanguageViewer />
            <AccountViewer />
            <OrderViewer />
            <CartViewer />
            </div>
            

        </header>
    )
}
const CompaneyLogo = () => {
    return (
        <div className="logo__container" >
            <img src={Logo} />
        </div>
    )
}
const SearchBar = () => {
    return (
        <div className="search__container horizontal__flex" >
            <div className="category__selector__container horizontal__flex" >
                <span>All</span>
                <DownArrowIcon /></div>
            <input className="search__product" type="text" />
            <div className="horizontal__flex"><SearchIcon /></div>
        </div>
    )
}
const LocationViewer = () => {
    return (
        <div className="location__container horizontal__flex header__hover" >
            <span><LocationIcon /> </span>
            <div className="vertical__flex">
                <span>{"Deliver to suhas"}</span>
                <span>{"Karad 415111"}</span>
            </div>
        </div>
    )
}
const LanguageViewer = () => {
    return (
        <div className=" horizontal__flex language__container header__hover" >
            <span><IndiaFlagIcon /></span>
            <span className="drop__down"> <DownArrowIcon /> </span>
        </div>
    )
}
const AccountViewer = () => {
    return (
        <div className="acc__list__container vertical__flex header__hover" >
            <span className="__8rem">hello Suhas</span>
            <span>{"Accounts & Lists"}</span>
        </div>
    )
}
const OrderViewer = () => {
    return (
        <div className="return__order__container vertical__flex header__hover" >
                <span className="__8rem">Returns</span>
                <span>{"& Orders"}</span>
            </div>
    )
}
const CartViewer = () => {
    return (
        <div className="cart__container header__hover" >
            <span><CartIcon /></span>
        </div>
    )
}

export default Header
