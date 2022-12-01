import React, {useState} from "react"
import {Link} from 'react-router-dom'

function Header() {
    const [menuToogle, setMenuToggle] = useState(false)

    const menu =
    <div className="header__menu">
        <h2 className="header__menu-title">menu</h2>
        <Link onClick={()=> setMenuToggle(false)} to='/' className="header__menu-element">Home</Link>
        <Link onClick={()=> setMenuToggle(false)} to='/live' className="header__menu-element">Live matches</Link>
    </div>


    return(
    <div>
        <header className="header">
            <i onClick={()=> setMenuToggle(pre => !pre)} className="fa-solid fa-bars header_icon"></i>
        </header>

        {menuToogle && menu }
    </div>
    )
}

export default Header