import React, { useEffect, useState } from 'react';
import '../styles/wishlist.scss';
import axios from 'axios';

export default function WishlistCard({
  productId,
  selectedProduct,
  setSelectedProduct,
  hidebutton,
  previouslySavedCart,
  setPrevouslySavedCart,
}) {
  const [productData, setProductData] = useState({});
  const [selected, setSelected] = useState(false);
  const [discount, setDiscount] = useState(0);
  const fetchProductData = () => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((data) => {
      setProductData(data.data);
      let savedData = JSON.parse(localStorage.getItem("cart"));
      if (savedData === null) {
        savedData = [];
      }
      let product_count = 0;
      savedData.forEach((value) => {
        if (value.id === data.data.id) {
          product_count += 1;
        }
      });
      if(product_count<=10){

        setDiscount(product_count * 10);

      }else{
        setDiscount(100)
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  const addToCart = () => {
    setSelected(true);
    let temp_data=productData;
    temp_data.price=productData.price*(1-discount/100);
    setSelectedProduct((prev) => [...prev, temp_data]);
    // let temp = previouslySavedCart;
    // let changesDone = false;
    // temp.forEach((value, index) => {
    //   if (value.productId === productData.id) {
    //     temp[index] = {
    //       productId: value.productId,
    //       quantity: (value.quantity += 1),
    //     };
    //     setPrevouslySavedCart(temp);
    //     changesDone = true;
    //   }
    // });
    // if (!changesDone) {
    //   temp.push({
    //     productId: productData.id,
    //     quantity: 1,
    //   });
    //   setPrevouslySavedCart(temp);
    // }
  };
  const removeFromCart = () => {
    setSelected(false);
    let temp = selectedProduct;
    temp = temp.filter((value) => value.id !== productData.id);
    setSelectedProduct(temp);
  };
  return (
    <div className="wishlistCard">
      {discount?<div className="discountBanner">
        {discount}% off
      </div>:""}
      <div className="wishlistCard-image">
        <img src={productData.image} alt="" />
      </div>
      <h2 className="wishlistCard-title">{productData.title}</h2>
      {discount ? (
        <div className="wishlistCard-discount">
          <h2 className="wishlistCard-price">
            ${productData.price * (1 - discount / 100)}
          </h2>
          <h2 className="wishlistCard-price-discount">
            ${productData.price}
          </h2>

        </div>
      ) : (
        <h2 className="wishlistCard-price">${productData.price}</h2>
      )}

      {!hidebutton ? (
        <div className="wishlistCard-btnPos">
          <div></div>
          {!selected ? (
            <div className="wishlistCard-btn" onClick={addToCart}>
              <p>Add to Cart</p>
            </div>
          ) : (
            <div className="wishlistCard-btn-red" onClick={removeFromCart}>
              <p>Remove From Cart</p>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}