import "../sass/Footer.scss";
import links from "../assets/links.json"
import FooterLinks from "../components/FooterLinks.jsx"

const Footer = () => {
  return (
    <div className="footer">

      <FooterLinks header={"CHAI."} links={links}/>
    </div>
  )
}

export default Footer;