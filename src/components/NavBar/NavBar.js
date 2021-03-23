import React from "react";
import { Female, Male } from "@styled-icons/ionicons-outline";
import { Link } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

export const NavBar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to='/products' className='nav-item'>
            <Female size='30' />
            <span className='link'>Women</span>
            <img
              src='https://images.unsplash.com/photo-1582533552406-234434284c17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80'
              alt=''
            />
          </Link>
        </li>
        <li>
          <Link to='/products' className='nav-item'>
            <Male size='30' />
            <span className='link'>Men</span>
            <img
              src='https://images.unsplash.com/photo-1582533552406-234434284c17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80'
              alt=''
            />
          </Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default NavBar;
