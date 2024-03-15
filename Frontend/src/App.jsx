import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import InfoPage from "./pages/InfoPage";
import Shop from "./pages/Shop";
import CoffeeDetail from "./components/CoffeeDetail";
import Checkout from "./pages/Checkout";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<CoffeeDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
