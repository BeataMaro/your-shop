import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { User, Heart, ShoppingCart } from "@styled-icons/feather/";
import StyledNavMenu from "./StyledNavMenu";
//Redux
import { connect } from "react-redux";
import { getNumbers } from "../../actions/getAction";

const NavMenu = ({ cartProps }) => {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    const menu = document.querySelector(".menu");
    const sticky = hero.getBoundingClientRect();

    const scrollCallBack = window.addEventListener("scroll", () => {
      window.pageYOffset > sticky.height / 2
        ? menu.classList.add("sticky")
        : menu.classList.remove("sticky");
    });

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <>
      <StyledNavMenu className='menu'>
        <NavLink to='/' className='logo'>
          <h1>
            YOUR<span>.</span>Shop
          </h1>
        </NavLink>
        <ul>
          <NavLink to='/account'>
            <li>
              <User size='30' />
              <span>Account</span>
            </li>
          </NavLink>
          <li>
            <a href='/favorites'>
              <Heart size='30' />
              <span>Favorites</span>
            </a>
          </li>
          <NavLink to='/cart'>
            <li>
              <ShoppingCart size='30' />
              <span>
                Cart ({cartProps.cartNumbers}) {cartProps.productName}
              </span>
            </li>
          </NavLink>
        </ul>
      </StyledNavMenu>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getNumbers })(NavMenu);
