import React from 'react';
import ChildCard from './ChildCard';
import '../styles/home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <>
      <div className="homeTitle">
        <h2>Childrens' Wishlists</h2>
      </div>
      <div className="wishlistCards">
        <Link to="wishlist/1/John" style={{ textDecoration: "none" }}>
          <ChildCard name={"John"} gender={"male"} />
        </Link>
        <Link to="wishlist/2/Jennifer" style={{ textDecoration: "none" }}>
          <ChildCard name={"Jennifer"} gender={"female"} />
        </Link>
        <Link to="wishlist/3/Thomas" style={{ textDecoration: "none" }}>
          <ChildCard name={"Thomas"} gender={"male"} />
        </Link>
        <Link to="wishlist/4/Lisa" style={{ textDecoration: "none" }}>
          <ChildCard name={"Lisa"} gender={"female"} />
        </Link>
        <Link to="wishlist/2/David" style={{ textDecoration: "none" }}>
          <ChildCard name={"David"} gender={"male"} />
        </Link>
      </div>
    </>
  );
}

export default Home