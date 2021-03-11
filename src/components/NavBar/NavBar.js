import React from "react";
import "./styledNavBar.scss";

export const NavBar = () => {
  return (
    <section>
      <nav>
        <ul className='navBar'>
          <li className='navBar__item'>
            <a href='#'>
              <ion-icon name='female-outline'></ion-icon>Women
            </a>
          </li>
          <li className='navBar__item'>
            <a href='#'>
              <ion-icon name='male-outline'></ion-icon>Men
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
