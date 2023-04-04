import { NavLink } from "react-router-dom";
import './styles/navbar.css'

const links = [
    { path: "/", text: "Home"},
    { path: "Calculator", text: "Calculator"},
    { path: "Quote", text: "Quote"},
];

const Navbar = () => {
  return (
    <nav className="navigation">
      <h1>Math Magicians</h1>
      <ul>
        {links.map(link => {
            return ( 
            <li key={link.path}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
            )
        })
        }
      </ul>
    </nav>
  );
}

  export default Navbar;
  