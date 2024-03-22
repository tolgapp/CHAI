import { Link } from "react-router-dom";
import "../scss/Navbar.scss";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { useSearchContext } from "../context/SearchContext";
import Search from "../components/Search";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { open, handleOpen } = useSearchContext();
  const [isSticky, setIsSticky] = useState(false);
  const [path, setPath] = useState(false);

  const location = useLocation('');

  useEffect(() => {
    if (location.pathname === "/shop") {
      setPath(true);
    }
  }, []);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="navbar">
        <h1 className={`chai-nav ${isSticky ? "logo-fixed" : ""}`}>
          <Link to={"/"}>CHAI.</Link>
        </h1>
        {open ? (
          <div className="search-container">
            <Search />
            <img
              onClick={handleOpen}
              className="x-icon"
              src="/images/x.png"
              alt="shopping cart icon"
            />
          </div>
        ) : (
          <div className="nav-links">
            <Link to={"/home"}>HOME</Link>
            <Link to={"/info"}>WHY CHAI?</Link>
            <Link to={"/shop"}>SHOP</Link>
            {path ? <img
              onClick={handleOpen}
              className="searchicon"
              src="/images/search.png"
              alt="shopping cart icon"
            /> : null}
            <Link to={"#"}>
              <img
                className="shoppingcart"
                src="/images/shoppingBag.png"
                alt="shopping cart icon"
              />
            </Link>
          </div>
        )}
      </div>
      <MobileNav />
    </>
  );
};

export default Navbar;
