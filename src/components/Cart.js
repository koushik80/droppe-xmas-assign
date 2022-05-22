import React, { useState, useEffect } from 'react'
import WishlistCard from './WishlistCard';
import '../styles/cart.scss';

const Cart = () => {

  const [cart, setCart] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const fetchCartData = () => {
    let savedData = JSON.parse(localStorage.getItem("cart"));
    if (savedData === null) {
      savedData = [];
    }
    console.log(savedData)
    let temptotal = 0;
    if (savedData.length !== 0) {
      setCart(savedData);
      savedData.forEach((value) => {
        temptotal += value.price;
      });
    } else {
      setCart(savedData);
    }
    setTotalMoney(temptotal);
  };
  useEffect(() => {
    fetchCartData();
  }, []);
  return (
    <div className="cartPage">
      <div className="cartTitle">
        <h2>My Cart</h2>
        <h3>
          Total: <span>${totalMoney}</span>{" "}
        </h3>
      </div>
      <div className="wishlists">
        {cart.length === 0 ? (
          <p className="loading">Your cart is empty</p>
        ) : (
          <div className="wishlists">
            {cart.map((data) => (
              <WishlistCard
                key={data.id}
                productId={data.id}
                hidebutton={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart
