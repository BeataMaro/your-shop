import styled from "styled-components";

export const ProductsWrapper = styled.div`
  margin: 2em auto 3em;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;

export const StyledProduct = styled.div`
  background-color: ${({ theme }) => theme.colors.greyBlue};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  &:hover {
    button {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    /* width: 50%; */
    width: 40%;
  }
  @media (min-width: 1200px) {
    /* width: 33.3%; */
    width: 25%;
  }

  & img {
    transition: ${({ theme }) => theme.transitions.quick};

    &:hover {
      transform: scale(1.1);
    }
  }
`;
