import React from 'react'
import "./navbar.css"
const navbar = () => {
    return (
        <>
            <nav className="nav">
                <div className="logo">
                    <img src="/images/logo/Coca-Cola-logo.png" alt="" />
                </div>
                <div className="nav-details">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Brands</li>
                        <li>Our Company</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navbar
