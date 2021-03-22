import React from "react";
import { Ship } from "@styled-icons/boxicons-solid/Ship";
import StyledDiscountBar from "./StyledDiscountBar";

export const DiscountBar = () => {
  return (
    <StyledDiscountBar>
      <a href='/' className='sale'>
        <ion-icon name='pricetags-outline'></ion-icon>
        <span>Sale -50%</span>
      </a>
      <p>
        Free delivery with code:
        <span className='code'>
          FREE-SHIPPING
          <Ship size='30' />
        </span>
      </p>
    </StyledDiscountBar>
  );
};

export default DiscountBar;
