import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0% {
    color: ${({ theme }) => theme.colors.greyblue};
    text-shadow: -1px -1px 2px ${({ theme }) => theme.colors.greyblue};
  }

  50% {
    color: violet;
    text-shadow: -1px -1px 2px violet;
  }

  100% {
    color: teal;
    text-shadow: -1px -1px 6px teal;
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
      font-size: 2rem;
    }
  }

  & p {
    color: ${({ theme }) => theme.colors.lightgrey};
  }
  .code {
    color: ${({ theme }) => theme.colors.gold};
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
