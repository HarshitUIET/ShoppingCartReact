import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  )
};

export default App;
