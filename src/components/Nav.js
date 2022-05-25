import React from 'react';
import logo from './logo.png';
import '../App.scss';
import CartImage from '../images/cart-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import '../styles/nav.scss';
const Nav = () => {
  return (
    <div className="nav">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="nav-logo">
          <div className="wrapper">
            <h1>Droppe Xmas</h1>
	        </div>
        </div>
      </Link>

      <Link to="/cart" style={{ textDecoration: "none" }}>
        <div className="nav-cart">
          <p>My Cart</p>
          <img src={CartImage} alt="" />
        </div>
        <div><img src={logo} className="App-logo" alt="logo" /></div>
      </Link>
    </div>
  );
}

export default Nav