import { Route, Routes } from 'react-router';
import Home from "./pages/Home";
import InfoPage from "./pages/InfoPage";
import Coffees from './components/Coffees';
import './index.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/info' element={<InfoPage />} />
        <Route path='/shop' element={<Coffees />} />
      </Routes>
    </>
  )
}

export default App
