import "./Header.css"
import { NavLink } from "react-router-dom";

function Header () {
    return (
        <div className="header">
            <h1>The Movies Saga!</h1>
            <div className="site-nav">
                <NavLink className="site-link" to='/'>Home</NavLink>
                <NavLink className="site-link" to='/genres'>Genres</NavLink>
            </div>
        </div>
    )
}

export default Header;