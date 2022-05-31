import { useState, useEffect } from 'react'
import logo from '../images/logo.svg'
import MobileMenu from './MobileMenu'
import DesktopNav from './DesktopNav'

function Header() {
    let [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        
        window.addEventListener('resize', () => setWidth(window.innerWidth))
    } )
    return (
        <header className="header">
            <div className="header__nav">
            <img src={logo} alt="" />
               {width <= 699 ? <MobileMenu /> : <DesktopNav />}
            </div>
        </header>
    )
}

export default Header