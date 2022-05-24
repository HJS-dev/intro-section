import logo from '../images/logo.svg'
import MobileMenu from './MobileMenu'

function Header() {
    
    return (
        <header className="header">
            <div className="header__nav">
            <img src={logo} alt="" />
                <MobileMenu />
            </div>
        </header>
    )
}

export default Header