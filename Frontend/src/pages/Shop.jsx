import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Coffees from "../components/Coffees";
import Footer from "../components/Footer";
import "../scss/Coffees.scss";

const Shop = () => {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    
    fetch("https://fake-coffee-api.vercel.app/api")
    .then((res) => res.json())
    .then((data) => setCoffee(data));
    
  }, []);

  return (
    <div>
      <Navbar />
      <section className="coffee-section">
        {coffee.map((elt) => {
          return <Coffees coffee={elt} key={elt._id} />;
        })}
      </section>
      <Footer />
    </div>
  );
};

export default Shop;
