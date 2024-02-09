import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../sass/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="chai">HELLO <br />CHAI.</div> 
      <Footer />
    </div>
  );
};

export default Home;
