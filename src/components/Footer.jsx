import "../sass/Footer.scss";
import links from "../assets/links.json"
import FooterLinks from "../components/FooterLinks.jsx"

const Footer = () => {
  return (
    <div className="footer">
      <FooterLinks header={"Info & Help"} links={links}/>
      <FooterLinks header={"Other Data"} links={links}/>
      <FooterLinks header={"Other Data"} links={links}/>
      <FooterLinks header={"Other Data"} links={links}/>
    </div>
  )
}

export default Footer;