import styled from "styled-components";

export const ProductsWrapper = styled.div`
  margin: 2em auto 3em;
  /* width: 90%; */
  width: 70%;
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

  & button {
    display: flex;
    justify-content: space-between;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.grey};
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem;
    border: none;
    opacity: 0;
    transition: all 0.3s ease-in;
    cursor: pointer;

    & span {
      margin-left: 10px;
    }

    &:hover {
      color: white;
      background-color: black;
    }
    &:focus {
      outline: 0.1px solid grey;
      outline-offset: -5px;
    }
    &:active {
      color: white;
    }
  }
`;
