import { Link } from "react-router-dom";
import "../sass/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>CHAI.</h1>
      <div className="searchbar">
        <input type="text" className="input" placeholder="What is Chai?"/>
        <input type="submit" value={"Search"} className="searchbutton" />
      </div>
      <div className="nav-links">
        <Link to={"/home"}>HOME</Link>
        <Link to={"/info"}>INFO</Link>
        <Link to={"/"}>WHY CHAI?</Link>
      </div>
    </div>
  );
};

export default Navbar;
