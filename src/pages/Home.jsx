import Footer from "../components/Footer";
import HomeData from "../components/HomeData";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import "../scss/Home.scss";

const Home = () => {

  return (
    <div className="home">
      <Navbar />
      <HomeData />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
