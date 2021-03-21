import React from "react";
import "./DiscountBar.scss";
import { Ship } from "@styled-icons/boxicons-solid/Ship";

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
          FREE-SHIPPING
          <Ship size='30' />
        </span>
      </p>
    </div>
  );
};

export default DiscountBar;
