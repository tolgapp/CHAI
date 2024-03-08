import "../scss/Footer.scss";
import links from "../assets/links.json";
import FooterLinks from "./FooterLinks.jsx";
import FooterLogo from "./FooterLogo.jsx";

const Footer = () => {
  const linksOne = links.filter((elt) => elt.id <= 4);
  const linksTwo = links.filter((elt) => elt.id >= 5 && elt.id <= 8);
  const linksThree = links.filter((elt) => elt.id >= 9 && elt.id <= 12);

  return (
    <div className="footer">
      <FooterLinks header={"Chai World"} links={linksOne} />
      <FooterLinks header={"Made in .. ?"} links={linksThree} />
      <FooterLinks header={"Info & Help"} links={linksTwo} />
      <FooterLogo />
    </div>
  );
};

export default Footer;
