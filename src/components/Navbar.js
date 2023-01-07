import { Link } from "react-router-dom";
import { NavItem } from "./Items";
import "../Website/website.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <h3>
          <Link className="nav-link" to="/">
            Hayani
          </Link>
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav ms-auto">
            <NavItem>
              <Link className="nav-link" to="/posts">
                Posts
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/todo">
                ToDo
              </Link>
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
