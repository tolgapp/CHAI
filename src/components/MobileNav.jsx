import { Link } from "react-router-dom"
import "../sass/Navbar.scss"

const MobileNav = () => {
  return (
    <div className="mobile-nav">
        <Link to={"#"} className='mobile-home'>Home</Link>
        <Link to={"#"} className='mobile-info'>Info</Link>
        <Link to={"#"} className='mobile-why-chai'>Why Chai?</Link>
    </div>
  )
}

export default MobileNav