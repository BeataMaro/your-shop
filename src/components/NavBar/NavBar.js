import React from "react";
import { Female, Male } from "@styled-icons/ionicons-outline";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <section>
      <nav>
        <div className='navBar'>
          <NavLink to='/products' className='navBar__item'>
            <Female size='30' />
            {/* <ion-icon name='female-outline'></ion-icon> */}
            <span>Women</span>
          </NavLink>
          <NavLink to='/products' className='navBar__item'>
            <Male size='30' />
            <span>Men</span>
          </NavLink>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
