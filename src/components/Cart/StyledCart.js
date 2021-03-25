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
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* border: 1px solid orange; */
  }

  & span {
    transition: 0.2s ease;
    color: orange;

    &:hover {
      color: violet;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export default StyledCart;
