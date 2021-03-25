import React from "react";
import { Female, Male } from "@styled-icons/ionicons-outline";
import { Link } from "react-router-dom";
import {
  StyledNavbar,
  StyledAsideNavBar,
  StyledAsideImage,
} from "./StyledNavbar";

export const NavBar = ({ aside }) => {
  const small = aside === true;

  return !small ? (
    <StyledNavbar>
      <ul>
        <li>
          <Link to='/products/women' className='nav-item'>
            <Female size='30' />
            <span className='link'>Women</span>
            <img
              src='https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
              alt=''
            />
          </Link>
        </li>
        <li>
          <Link to='/products/men' className='nav-item'>
            <Male size='30' />
            <span className='link'>Men</span>
            <img
              src='https://images.unsplash.com/photo-1530735038726-a73fd6e6a349?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
              alt=''
            />
          </Link>
        </li>
      </ul>
    </StyledNavbar>
  ) : (
    <StyledAsideNavBar aside={aside}>
      <input type='radio' name='half' />
      <Link to='/products/women'>
        <StyledAsideImage gender='women' className='half'>
          <div className='image'>
            <div className='title'>
              <Male size='30' />
              <span>Women</span>
            </div>
          </div>
        </StyledAsideImage>
      </Link>

      <input type='radio' name='half' />
      <Link to='/products/men'>
        <StyledAsideImage gender='men' className='half'>
          <div className='title'>
            <Female size='30' />
            <span>Men</span>
          </div>
        </StyledAsideImage>
      </Link>
    </StyledAsideNavBar>
  );
};

export default NavBar;
