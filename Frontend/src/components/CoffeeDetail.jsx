import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../scss/CoffeeDetail.scss";

const CoffeeDetail = () => {
  const location = useLocation();

  const { name, description, price, region, weight, image_url, roast_level } =
    location.state;

  return (
    <div>
      <Navbar />
      <div className="detailed">
        <img
          src={image_url}
          alt={`${name} coffee`}
        />
        <section className="detailed-section">
          <h3>{name}</h3>
          <h4>{description}</h4>
        </section>
        <div className="more-info">
          <p>Region: <span>{region}</span></p>
          <p>Roast Level: <span>{roast_level}</span></p>
          <p>Weight: <span>{weight} g</span></p>
          <p>Price: <span>{price} €</span></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoffeeDetail;
