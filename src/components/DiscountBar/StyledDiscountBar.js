import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0% {
    color: #8fbe6f;
    text-shadow: -1px -1px 5px #8fbe6f;
  }

  50% {
    color: royalblue;
    text-shadow: -1px -1px 5px royalblue;
  }

  100% {
    color: orangered;
    text-shadow: -1px -1px 5px orangered;
  }

`;

const StyledDiscountBar = styled.aside`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.lightgrey};
  background-color: ${({ theme }) => theme.colors.darkviolet};
  padding: 1em;
  font-weight: 500;

  .sale {
    animation: ${blink} 1.3s infinite alternate ease-out;
    letter-spacing: 1px;
    align-self: center;

    & span {
      margin-left: 6px;
    }
  }

  & p {
    color: ${({ theme }) => theme.colors.lightgrey};
  }
  .code {
    color: orangered;
    padding: 0.4rem;
    font-weight: 700;
    display: block;
    text-align: right;

    @media (min-width: 768px) {
      margin-left: 1rem;
      display: inline-block;
    }

    & svg {
      vertical-align: bottom;
      margin-left: 10px;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

export default StyledDiscountBar;
