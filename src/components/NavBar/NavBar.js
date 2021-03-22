import React from "react";
import { Female, Male } from "@styled-icons/ionicons-outline";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  color: ${({ theme }) => theme.colors.lightgrey};
  background-color: #ebf0f5;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;

  @media (min-width: 768px) {
    width: 50%;
    border-bottom: none;
    flex-direction: row;
  }

  .nav-item {
    flex-basis: 100%;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 1rem;
    box-shadow: ${({ theme }) => theme.shadows.boxShadow};
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowHover};
      color: ${({ theme }) => theme.colors.gold};
      border-bottom: none;
      transform: scale(1.05);
    }
  }
`;

export const NavBar = ({ theme }) => {
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
