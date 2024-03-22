import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Coffees from "../components/Coffees";
import Footer from "../components/Footer";
import axios from "axios";
import "../scss/Coffees.scss";
import { useSearchContext } from "../context/SearchContext";

const Shop = () => {
  const [coffee, setCoffee] = useState([]);
  const [loading, setLoading] = useState(true);
  const { text } = useSearchContext();

  useEffect(() => {
    console.log("Fetching!");
    axios
      .get("https://fake-coffee-api.vercel.app/api")
      .then((response) => setCoffee(response.data))
      .catch((error) => console.error(error));
    setLoading(false);

    return () => {
      console.log("Fetching Done!");
    };
  }, []);

  const filteredCoffee = coffee.filter((elt) => {
    const nameLower = elt.name.toLowerCase();
    const textLower = text.toLowerCase();
    return nameLower.includes(textLower);
  });

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="loading">Loading</div>
      ) : (
        <section className="coffee-section">
          {filteredCoffee.map((elt) => {
            return <Coffees coffee={elt} key={elt._id} />;
          })}
        </section>
      )}
      <Footer />
    </div>
  );
};

export default Shop;
