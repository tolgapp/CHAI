import { Link } from "react-router-dom";
import "../scss/Coffees.scss";

const Coffees = ({ coffee }) => {
  return (
    <>
      <div className="coffee-container">
        <section className="coffee-image">
          <img src={coffee.image_url} alt={coffee.description} />
          <p className="coffee-name">{coffee.name}</p>
        </section>
        <section className="coffee-info">
          <h3 className="coffee-price">{coffee.price} €</h3>
          <Link
            to={`/shop/${coffee.name}`}
            state={coffee}
            className="coffee-to-cart"
          >
            More info
          </Link>
        </section>
      </div>
    </>
  );
};

export default Coffees;
