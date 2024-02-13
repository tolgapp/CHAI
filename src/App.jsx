import { Route, Routes } from 'react-router';
import Home from "./pages/Home";
import InfoPage from "./pages/InfoPage";
import './index.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/info' element={<InfoPage />} />
      </Routes>
    </>
  )
}

export default App
