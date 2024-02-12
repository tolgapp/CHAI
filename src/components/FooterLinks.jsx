import { Link } from "react-router-dom";

const FooterLinks = ({header, links}) => {
  return (
    <div>
      <h2 className="footerHeader">{header}</h2>
      {links.map((elt) => {
        return (
          <section key={elt.id} className="footerSection">
            <Link to={"#"} className="footerLinks">
              {elt.text}
            </Link>
          </section>
        );
      })}
    </div>
  );
};

export default FooterLinks;
