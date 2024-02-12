import { Link } from "react-router-dom"
import "../scss/Navbar.scss"

const MobileNav = () => {
  return (
    <div className="mobile-nav">
        <Link to={"#"} className='mobile-home'><img src="/images/home.png" alt="home icon"/></Link>
        <Link to={"#"} className='mobile-info'><img src="/images/info.png" alt="info icon"/></Link>
        <Link to={"#"} className='mobile-why-chai'><img src="/images/question.png" alt="question mark icon"/></Link>
    </div>
  )
}

export default MobileNav