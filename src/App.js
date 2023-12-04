import './App.css';
import Header from './Components/Header';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';


function App() {
  return (
    <>
    <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
