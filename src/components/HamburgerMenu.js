import { useState } from "react";
import MneuBtn from '../images/icon-menu.svg'
import CloseMenu from '../images/icon-close-menu.svg'


function HamburgerMenu() {
    const [active, setActive] = useState(false)

    function toggleMenu() {
        if (active === false) {
            setActive(true)
        }
        else setActive(false)
    }
    
    return (
        <button className="menuBtn" onClick={toggleMenu}>
            <img src={active ? CloseMenu : MneuBtn} alt="" />
        </button>
    )
}

export default HamburgerMenu