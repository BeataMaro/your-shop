import React from "react";
import "./styledDiscountBar.scss";

export const DiscountBar = () => {
  return (
    <div className='discount-bar'>
      <a href='/' className='discount-bar__sale'>
        <ion-icon name='pricetags-outline'></ion-icon>
        Sale -50%
      </a>
      <p>
        Free delivery with code:
        <span className='discount-bar__code'>
          FREE-SHIP <ion-icon name='boat-outline'></ion-icon>
        </span>
      </p>
    </div>
  );
};

export default DiscountBar;
