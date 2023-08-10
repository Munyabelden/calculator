import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import './styles/navbar.css'

const links = [
    { path: "/", text: "Home"},
    { path: "/Calculator", text: "Calculator"},
    { path: "/Quote", text: "Quote"},
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <nav className="navigation">
      <h1 className={`logo ${location.pathname === "/Quote" ? 'active' : 'usuall'}`}>
        Math Magicians
      </h1>
      <ul>
        {links.map(link => (
          <li key={link.path}>
            <NavLink 
              to={link.path}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
