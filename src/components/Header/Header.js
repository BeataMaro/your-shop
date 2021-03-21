import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { User, Heart, ShoppingCart } from "@styled-icons/feather/";

//Redux
import { connect } from "react-redux";
import { getNumbers } from "../../actions/getAction";

const Header = ({ cartProps }) => {
  console.log(cartProps);

  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <header className='App-header'>
      <div className='App-header__overlay'></div>
      <nav className='App-header__nav'>
        <NavLink to='/' className='App-header__title'>
          <h1>
            YOUR<span>.</span>Shop
          </h1>
        </NavLink>
        <ul className='App-header__menu'>
          <NavLink to='/account'>
            <li className='App-header__menu--account'>
              <User size='30' />
              <span>Account</span>
            </li>
          </NavLink>
          <li className='App-header__menu--favourites'>
            <a href='#'>
              <Heart size='30' />
              <span>Favorites</span>
            </a>
          </li>
          <NavLink to='/cart'>
            <li className='App-header__menu--cart'>
              <ShoppingCart size='30' />
              <span>
                Cart ({cartProps.cartNumbers}) {cartProps.productName}
              </span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getNumbers })(Header);
