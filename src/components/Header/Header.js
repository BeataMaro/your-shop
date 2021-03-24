import React from "react";
import StyledHeader from "./StyledHeader";
import { NavMenu } from "../NavMenu";
// import { NavBar } from "../NavBar";

const Header = () => {
  return (
    <StyledHeader className='hero'>
      <div className='overlay'></div>
      <NavMenu />
      {/* <NavBar /> */}
    </StyledHeader>
  );
};

export default Header;
