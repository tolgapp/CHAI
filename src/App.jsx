import { Route, Routes } from 'react-router';
import Home from "./pages/Home";
import './index.css'

function App() {
  
  console.log(window);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
