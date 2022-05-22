import React from 'react';
import greenCheck from '../images/greencheck.svg';
import '../styles/confirmationPage.scss';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="confirmation">
      <div className="confirmation-banner">
        <img src={greenCheck} alt="" />
        <h3>Your items were added to the cart successfully</h3>
      </div>
      <div className="confirmation-btns">
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div className="greenBtn">
            <p>Go to cart</p>
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="redBtn">
            <p>Go to Home</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default ConfirmationPage