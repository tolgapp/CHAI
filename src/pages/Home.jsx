import Footer from "../components/Footer";
import HomeData from "../components/HomeData";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import "../sass/Home.scss";

const Home = () => {
  // TODO: Mobile Styling 1st!
  // TODO: CHAI. Logo in the Footer with Adress and copyright
  // TODO: Some extra info about Chai how to make a chai etc.
  // TODO: For now just adding a shopping cart icon (nav)

  // FIXME: Padding / Margin after Why Chai? in the Nav fix.
  // FIXME: Style the text better next to the 3 pics or center the pics with greater height and add the text below the pics.
  // FIXME: Icons instead of Text if Mobile (Mobile Nav)

  // ***For Mobile Styling***                                   @media only screen and (max-width: 600px) { }

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
