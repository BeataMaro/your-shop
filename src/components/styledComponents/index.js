import React from "react";
import styled from "styled-components";

//WRAPPER COMPONENT

const StyledWrapper = styled.section`
  margin: 1rem 0 1rem 0;
  padding: 1rem;
`;

export const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

//PRODUCT'S IMAGE COMPONENT

const StyledProductImage = styled.img`
  transition: ${({ theme }) => theme.transitions.quick};

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductImage = ({ imgAlt, imgSrc }) => {
  return <StyledProductImage src={imgSrc} alt={imgAlt} />;
};

//PRODUCT WRAPPER COMPONENT

const StyledProductWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.greyBlue};
  /* padding: 0.5rem; */
  width: 30%;
  position: relative;
  overflow: hidden;
`;

export const ProductWrapper = ({ children }) => {
  return <StyledProductWrapper>{children}</StyledProductWrapper>;
};
