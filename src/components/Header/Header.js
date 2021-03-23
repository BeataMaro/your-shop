import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { User, Heart, ShoppingCart } from "@styled-icons/feather/";
import StyledHeader from "./StyledHeader";

//Redux
import { connect } from "react-redux";
import { getNumbers } from "../../actions/getAction";

const Header = ({ cartProps }) => {
  console.log(cartProps);

  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <StyledHeader>
      <div className='overlay'></div>
      <nav>
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
      </nav>
    </StyledHeader>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getNumbers })(Header);
