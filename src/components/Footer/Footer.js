import React from "react";
import "./styledFooter.scss";

const Footer = () => {
  return (
    <footer className='footer'>
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
          className='footer__link'
        >
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
