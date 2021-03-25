import React from "react";
import { Link } from "react-router-dom";
import { Basket3 } from "@styled-icons/bootstrap/Basket3";
import { Breadcrumbs } from "../Breadcrumbs";
import { NavBar } from "../NavBar";

//Redux
import { connect } from "react-redux";
import { addCart } from "../../actions/addAction";

//Styled Components
import { ProductsWrapper, StyledProduct } from "./StyledProducts";

//Images
import skirt from "../../assets/products/skirt.jpg";
import momBlackJeans2 from "../../assets/products/mom-black-jeans2.jpg";
import whiteSweater from "../../assets/products/white-sweater.jpg";

export const Products = ({ addCart }) => {
  return (
    <>
      <Breadcrumbs />
      <NavBar aside />
      <ProductsWrapper>
        <StyledProduct>
          <Link to='/products/skirt'>
            <img src={skirt} alt='skirt' />
          </Link>
          <button onClick={() => addCart("skirt")} className='button'>
            <Basket3 size='20' />
            <span>Add to cart</span>
          </button>
        </StyledProduct>
        <StyledProduct>
          <Link to='/products/momBlackJeans'>
            <img src={momBlackJeans2} alt='Mom black jeans' />
          </Link>
          <button onClick={() => addCart("momBlackJeans")} className='button'>
            <Basket3 size='20' />
            <span>Add to cart</span>
          </button>
        </StyledProduct>
        <StyledProduct>
          <Link to='/products/whiteSweater'>
            <img src={whiteSweater} alt='model in white sweater' />
          </Link>
          <button onClick={() => addCart("whiteSweater")} className='button'>
            <Basket3 size='20' />
            <span>Add to cart</span>
          </button>
        </StyledProduct>
      </ProductsWrapper>
    </>
  );
};

export default connect(null, { addCart })(Products);
