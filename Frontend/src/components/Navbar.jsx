import { Link } from "react-router-dom";
import "../scss/Navbar.scss";
import MobileNav from "./MobileNav";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const h1Ref = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <>
      <div className="navbar">
        <h1 className={`chai-nav ${isSticky ? 'logo-fixed' : ''}`} ref={h1Ref}>
          <Link to={"/"}>CHAI.</Link>
        </h1>
        <div className="nav-links">
          <Link to={"/home"}>HOME</Link>
          <Link to={"/info"}>WHY CHAI?</Link>
          <img
            className="shoppingcart"
            src="/images/shoppingBag.png"
            alt="shopping cart icon"
          />
        </div>
      </div>
      <MobileNav />
    </>
  );
};

export default Navbar;
