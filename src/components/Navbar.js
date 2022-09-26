import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="logo">
        PWA APPLICATION
      </Link>

      <div className="nav-item">
        <Link to="/Create">Create</Link>
      </div>
    </div>
  );
};

export default Navbar;
