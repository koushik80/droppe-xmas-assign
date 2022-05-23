import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import WishlistCard from './WishlistCard';
import '../styles/wishlist.scss';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const Wishlist = () => {
  const navigate = useNavigate();
  let params = useParams();
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [previouslySavedCart, setPrevouslySavedCart] = useState([]);
  const saveCart = () => {
    let savedData = JSON.parse(localStorage.getItem("cart"));
    if (savedData === null) {
      savedData = [];
    }
    selectedProduct.forEach((value) => {
      savedData.push(value);
    });

    console.log(savedData);
    localStorage.setItem("cart", JSON.stringify(savedData));
    const date = new Date();
    axios
      .post("https://fakestoreapi.com/carts", {
        userId: 50,
        date: `${date.getYear() + 1900}-${
          date.getMonth() + 1
        }-${date.getDate()}`,
        products: previouslySavedCart,
      })
      .then((data) => {
        console.log(data);
      });
    navigate("/confirmationPage");
  };
  const fetchCart = () => {
    axios
      .get(`https://fakestoreapi.com/carts/user/${params.userid}`)
      .then((data) => {
        setCart(data.data[0].products);
      });
  };
  const fetchSavedCart = () => {
    axios.get(`https://fakestoreapi.com/carts/user/50`).then((data) => {
      console.log(data);
      if (data.data.length === 0) {
        setPrevouslySavedCart([]);
      } else {
        setPrevouslySavedCart(data.data[0].products);
      }
    });
  };

  useEffect(() => {
    fetchCart();
    fetchSavedCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="wishlistTitle">
        <h2>{params.name}'s Wishlist</h2>
      </div>
      <div className="wishlists">
        {cart.length === 0 ? (
          <p className="loading">
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="inherit" />
          </p>
        ) : (
          <div className="wishlists">
            {cart.map((data) => (
              <WishlistCard
                key={data.productId}
                productId={data.productId}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
                hidebutton={false}
                previouslySavedCart={previouslySavedCart}
                setPrevouslySavedCart={setPrevouslySavedCart}
              />
            ))}
          </div>
        )}
      </div>
      <div className="whishlist-btns">
        <div className="greenBtn" onClick={saveCart}>
          Confirm
        </div>

        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="gobackbtn">Go Back</div>
        </Link>
      </div>
    </>
  );
}

export default Wishlist