import React from "react";
import StyledHeader from "./StyledHeader";
import { NavMenu } from "../NavMenu";

const Header = () => {
  return (
    <StyledHeader className='hero'>
      <div className='overlay'></div>
      <NavMenu />
    </StyledHeader>
  );
};

export default Header;
