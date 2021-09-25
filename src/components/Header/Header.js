import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {



    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="" />
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="/">Shop</a>
                <a href="/">Order Review</a>
                <a href="/">Manage Inventory</a>
            </nav>
        </div>
    )
}

export default Header;