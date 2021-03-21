import React from "react";
import styled from "styled-components";

const StyledCart = styled.div`
  box-shadow: 2px 1px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  margin: 2rem auto;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 1em;

  & div {
    flex: 1;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Cart = ({ children }) => {
  return <StyledCart>{children}</StyledCart>;
};

export default Cart;
