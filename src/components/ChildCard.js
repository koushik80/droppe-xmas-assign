import React from 'react';
import boyImage from '../images/boy-svgrepo-com.svg';
import girlImage from '../images/girl-svgrepo-com.svg';
import '../styles/childCard.scss';

const ChildCard = ({ name ,gender }) => {
  return (
    <div className="childCard">
      {gender==="male"?   <img src={boyImage} alt="" />:<img src={girlImage} alt="" />}

      <h3>{name}'s Wishlist</h3>
    </div>
  )
}

export default ChildCard
