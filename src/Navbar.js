import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>STAR WARS</li>
        <li className="left">
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/People">people</Link>
        </li>
        <li>
          <Link to="/Planets">planets</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
