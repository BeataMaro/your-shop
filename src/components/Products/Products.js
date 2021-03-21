import React from "react";
import { Link } from "react-router-dom";
import "./Products.scss";
import { Basket3 } from "@styled-icons/bootstrap/Basket3";

import { Breadcrumbs } from "../Breadcrumbs";

//Redux
import { connect } from "react-redux";
import { addCart } from "../../actions/addAction";

//Styled Components
import { Wrapper, ProductWrapper, ProductImage } from "./StyledProducts";

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
            </Link>
            <button
              className='products__button'
              onClick={() => addCart("skirt")}
            >
              <Basket3 size='20' />
              <span>Add to cart</span>
            </button>
          </ProductWrapper>
          <ProductWrapper>
            <div className='products__wrapper'>
              <Link to='/products/momBlackJeans'>
                <ProductImage
                  imgSrc={momBlackJeans2}
                  imgAlt='Mom black jeans'
                />
              </Link>
              <button
                className='products__button'
                onClick={() => addCart("momBlackJeans")}
              >
                <Basket3 size='20' />
                <span>Add to cart</span>
              </button>
            </div>
          </ProductWrapper>
          <ProductWrapper>
            <div className='products__wrapper'>
              <Link to='/products/whiteSweater'>
                <ProductImage
                  imgSrc={whiteSweater}
                  imgAlt='model in white sweater'
                />
              </Link>
              <button
                className='products__button'
                onClick={() => addCart("whiteSweater")}
              >
                <Basket3 size='20' />
                <span>Add to cart</span>
              </button>
            </div>
          </ProductWrapper>
        </div>
      </Wrapper>
    </>
  );
};

export default connect(null, { addCart })(Products);
