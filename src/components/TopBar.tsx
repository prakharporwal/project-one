import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './style/topBar.scss'

function TopBar() {
    return (
        <nav className="topbar">
            <ul className="nav-list">
                <Link to="#"><div className="nav-item">Home</div></Link>
                <Link to="#"><div className="nav-item">Home</div></Link>
                <Link to="#"><div className="nav-item">Home</div></Link>
                <Link to="#"><div className="nav-item">Home</div></Link>
             
            </ul>

            <Logo></Logo>

            <div className="options">
                <span className="notification">🎂</span>
                <span className="extra">🎶</span>
                <Link to="/login"><span className="user-menu">😎</span></Link>
            </div>
        </nav>
    )
}

export default TopBar
