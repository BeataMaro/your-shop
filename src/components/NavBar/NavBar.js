import React from "react";
import { Female, Male } from "@styled-icons/ionicons-outline";
import { Link } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

export const NavBar = () => {
  return (
    <StyledNavbar>
      <Link to='/products' className='nav-item'>
        <Female size='30' />
        <span>Women</span>
      </Link>
      <Link to='/products' className='nav-item'>
        <Male size='30' />
        <span>Men</span>
      </Link>
    </StyledNavbar>
  );
};

export default NavBar;
