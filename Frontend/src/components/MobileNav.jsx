import { Link } from "react-router-dom";
import "../scss/Navbar.scss";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <Link to={"/home"} className="mobile-home">
        <img src="/images/home.png" alt="home icon" />
      </Link>
      <Link to={"/info"} className="mobile-why-chai">
        <img src="/images/question.png" alt="question mark icon" />
      </Link>
      <Link to={"#"} className="mobile-why-chai">
        <img src="/images/shoppingBag.png" alt="shoppingcart icon" />
      </Link>
    </div>
  );
};

export default MobileNav;
