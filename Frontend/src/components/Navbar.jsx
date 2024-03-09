import { Link } from "react-router-dom";
import "../scss/Navbar.scss";
import MobileNav from "./MobileNav";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const h1Ref = useRef(null);

  const handleHeight = () => {
    if (window.scrollY > 60) {
      h1Ref.current.classList.remove("chai-nav");
      h1Ref.current.classList.add("logo-fixed");
    }
  };

  const removeHandle = () => {
    if (window.scrollY < 60) {
      h1Ref.current.classList.remove("logo-fixed");
      h1Ref.current.classList.add("chai-nav");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeight);
    return () => window.removeEventListener("scroll", handleHeight);
  });

  useEffect(() => {
    window.addEventListener("scroll", removeHandle);
    return () => window.removeEventListener("scroll", removeHandle);
  });

  return (
    <>
      <div className="navbar">
        <h1 className="chai-nav" ref={h1Ref}>
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
