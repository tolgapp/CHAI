import Footer from "../components/Footer";
import HomeData from "../components/HomeData";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import InfoSecond from "../components/InfoSecond";
import "../scss/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HomeData />
      <Info />
      <InfoSecond />
      <Footer />
    </div>
  );
};

export default Home;
