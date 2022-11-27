import React, {useState} from "react"
import {Link} from 'react-router-dom'

function Header() {
    const [menuToogle, setMenuToggle] = useState(false)

    const menu =
    <div className="header__menu">
        <h2 className="header__menu-title">menu</h2>
        <Link onClick={()=> setMenuToggle(false)} to='/' className="header__menu-title">Home</Link>
    </div>


    return(
    <div>
        <header className="home__header">
            <i onClick={()=> setMenuToggle(pre => !pre)} className="fa-solid fa-bars"></i>
        </header>

        {menuToogle && menu }
    </div>
    )
}

export default Header