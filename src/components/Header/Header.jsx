import "./Header.css"
import { NavLink } from "react-router-dom";

function Header () {
    return (
        <div className="header">
            <h1>The Movies Saga!</h1>
            <div className="site-nav">
                <NavLink className="site-link" to='/' exact>All Movies</NavLink>
                <NavLink className="site-link" to='/genres'>Genres</NavLink>
                <NavLink className="site-link" to='/add'>Add Movie</NavLink>
            </div>
        </div>
    )
}

export default Header;