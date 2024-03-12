import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Coffees from "../components/Coffees";
import Footer from "../components/Footer";
import "../scss/Coffees.scss";

const Shop = () => {
  const [coffee, setCoffee] = useState([]);
  const [loading, setLoading] = useState(true);

console.log("Out", loading)

  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api")
      .then((res) => res.json())
      .then((data) => setCoffee(data));
      console.log("IN", loading);
    setLoading(false);
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="loading">Loading ..</div>
      ) : (
        <section className="coffee-section">
          {coffee.map((elt) => {
            return <Coffees coffee={elt} key={elt._id} />;
          })}
        </section>
      )}
      <Footer />
    </div>
  );
};

export default Shop;
