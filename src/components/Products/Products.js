import React from "react";
import { Link } from "react-router-dom";
import "./Products.scss";

import { Breadcrumbs } from "../Breadcrumbs";

//Redux
import { connect } from "react-redux";
import { addCart } from "../../actions/addAction";

//Styled Components
import { Wrapper, ProductWrapper, ProductImage } from "../styledComponents";

//Images
import skirt from "../../assets/products/skirt.jpg";
import momBlackJeans2 from "../../assets/products/mom-black-jeans2.jpg";
import whiteSweater from "../../assets/products/white-sweater.jpg";

export const Products = ({ addCart }) => {
  return (
    <>
      <Breadcrumbs />
      <Wrapper>
        <div className='products'>
          <ProductWrapper>
            <Link to='/products/skirt'>
              <ProductImage imgSrc={skirt} imgAlt='skirt' />
              <button
                className='products__button'
                onClick={() => addCart("skirt")}
              >
                <ion-icon name='basket-outline'></ion-icon>Add to cart
              </button>
            </Link>
          </ProductWrapper>
          <ProductWrapper>
            <div className='products__wrapper'>
              <ProductImage imgSrc={momBlackJeans2} imgAlt='Mom black jeans' />
              <button
                className='products__button'
                onClick={() => addCart("momBlackJeans")}
              >
                <ion-icon name='basket-outline'></ion-icon>Add to cart
              </button>
            </div>
          </ProductWrapper>
          <ProductWrapper>
            <div className='products__wrapper'>
              <ProductImage
                imgSrc={whiteSweater}
                imgAlt='model in white sweater'
              />
              <button
                className='products__button'
                onClick={() => addCart("whiteSweater")}
              >
                <ion-icon name='basket-outline'></ion-icon>Add to cart
              </button>
            </div>
          </ProductWrapper>
        </div>
      </Wrapper>
    </>
  );
};

export default connect(null, { addCart })(Products);
