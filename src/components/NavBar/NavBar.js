import React, { useState, useEffect } from "react";
import { Female, Male } from "@styled-icons/ionicons-outline";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  StyledNavbar,
  StyledAsideNavBar,
  StyledAsideImage,
} from "./StyledNavbar";

export const NavBar = ({ aside, url }) => {
  const small = aside === true;

  let end = url?.substr(url?.lastIndexOf("/") + 1);
  const [endpoint, setEndPoint] = useState(end);

  useEffect(() => {
    const showEndpoint = () => {
      end = url?.substr(url?.lastIndexOf("/") + 1);
      setEndPoint(end);
    };
    showEndpoint();
  }, [url]);

  return !small ? (
    <>
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
    </>
  ) : (
    <>
      <StyledAsideNavBar aside={aside}>
        <div>
          <Link to='/products/women'>
            <StyledAsideImage gender='women'>
              <div className={end === "women" ? `${endpoint} title` : "title"}>
                <Male size='30' />
                <span className='link'>Women</span>
              </div>
            </StyledAsideImage>
          </Link>
        </div>
        <div>
          <Link to='/products/men'>
            <StyledAsideImage gender='men'>
              <div className={end === "men" ? `${endpoint} title` : "title"}>
                <Female size='30' />
                <span className='link'>Men</span>
              </div>
            </StyledAsideImage>
          </Link>
        </div>
      </StyledAsideNavBar>
    </>
  );
};

NavBar.propTypes = {
  aside: PropTypes.bool,
  url: PropTypes.string,
};

export default NavBar;
