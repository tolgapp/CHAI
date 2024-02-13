import { Link } from "react-router-dom";
import "../scss/Navbar.scss";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <h1 className="chai-nav">CHAI.</h1>
      {/* <div className="searchbar">
        <input type="text" className="input" placeholder="What is Chai?"/>
        <input type="submit" value={"Search"} className="searchbutton" />
      </div> */}
      <div className="nav-links">
        <Link to={"/home"}>HOME</Link>
        <Link to={"/info"}>WHY CHAI?</Link>
      </div>
    </div>
    <MobileNav />
    </>
  );
};

export default Navbar;
