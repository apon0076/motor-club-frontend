import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../../assets/logo-2.jpg'
import { FaBars } from "react-icons/fa";

export default function Navbar({setSidebarToggle , sidebarToggle}) {
    return (
        <div className="fixed top-0 navbar__section px-10 flex items-center ">
            <FaBars className="menuToggle__icon" size="1.8rem"
                onClick={()=>setSidebarToggle(!sidebarToggle)}
            />
            <Link className="h-full" to="/">
                <img className="w-auto h-full navLogo" src={Logo} alt="logo"/>
            </Link>
            <></>
        </div>
    )
}
