import { NavLink } from "react-router";

function Header() {
    return (
        <nav>   
            <NavLink to="/" style={{padding:"10px 15px"}}>Home</NavLink>
            <NavLink to="/about" style={{padding:"10px 15px"}}>About</NavLink>
            <NavLink to="/login" style={{padding:"10px 15px"}}>Login</NavLink>
            <NavLink to="/register" style={{padding:"10px 15px"}}>Register</NavLink>
            <NavLink to="/project" style={{padding:"10px 15px"}}>Projects</NavLink>
        </nav>
    ); 
}

export default Header;