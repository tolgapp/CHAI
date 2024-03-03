import { Link } from "react-router-dom";
import "../scss/Navbar.scss";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <h1 className="chai-nav"><Link to={"/"}>CHAI.</Link></h1>
      <div className="nav-links">
        <Link to={"/home"}>HOME</Link>
        <Link to={"/info"}>WHY CHAI?</Link>
        <img className="shoppingcart" src="/images/shoppingBag.png" alt="shopping cart icon" />
      </div>
    </div>
    <MobileNav />
    </>
  );
};

export default Navbar;
