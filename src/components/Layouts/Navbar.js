import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../../assets/logo-2.jpg'

export default function Navbar() {
    return (
        <div className="fixed top-0 navbar__section px-10 flex items-center justify-between">
            <Link className="h-full" to="/">
                <img className="w-auto h-full" src={Logo} alt="logo"/>
            </Link>
            <></>
        </div>
    )
}
