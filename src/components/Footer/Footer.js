import React from "react";
import StyledFooter from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      &copy; Copyrights 2021
      <div>
        Icons made by{" "}
        <a
          href='https://www.flaticon.com/authors/vectors-market'
          target='_blank'
          title='Vectors Market'
        >
          Vectors Market
        </a>{" "}
        from{" "}
        <a
          href='https://www.flaticon.com/'
          target='_blank'
          title='Flaticon'
          className='link'
        >
          www.flaticon.com
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
