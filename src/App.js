import { Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import ConfirmationPage from './components/ConfirmationPage';
import SocialFollow from './SocialFollow';
import logo from './logo.png';
import './App.css';


const App = () => {
  return (
    <div className="App">
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="confirmationPage" element={<ConfirmationPage />} />
        <Route path="wishlist/:userid/:name" exact element={<Wishlist />} />
        <Route path="socialFollow" element={<SocialFollow />} />
      </Routes>
    </div>
  );
};

export default App;
