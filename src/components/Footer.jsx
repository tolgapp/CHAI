import "../scss/Footer.scss";
import links from "../assets/links.json"
import FooterLinks from "../components/FooterLinks.jsx"

const Footer = () => {
  return (
    <div className="footer">
      <FooterLinks header={"Info & Help"} links={links}/>
      <FooterLinks header={"Chai World"} links={links}/>
      <FooterLinks header={"Info & Help"} links={links}/>
      <FooterLinks header={"Info & Help"} links={links}/>
    </div>
  )
}

export default Footer;