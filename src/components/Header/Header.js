import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

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
          <h1>YOUR.Shop</h1>
        </NavLink>
        <ul className='App-header__menu'>
          <li className='App-header__menu--account'>
            <NavLink to='/account'>
              <ion-icon name='person-outline'></ion-icon>
              Account
            </NavLink>
          </li>
          <li className='App-header__menu--favourites'>
            <a href='#'>
              <ion-icon name='heart-half-outline'></ion-icon>Favourites
            </a>
          </li>
          <li className='App-header__menu--cart'>
            <NavLink to='/cart'>
              <ion-icon name='basket-outline'></ion-icon>
              Cart ({cartProps.cartNumbers}) {cartProps.productName}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getNumbers })(Header);
