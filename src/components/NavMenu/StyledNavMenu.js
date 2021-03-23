import styled from "styled-components";

const StyledNavMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  justify-content: space-between;
  z-index: 1000;
  transition: ${({ theme }) => theme.transitions.quick};

  .logo {
    color: white;
    background: black;
    align-self: flex-start;
    padding: 0.2em 0.6em;
    z-index: 2000;

    & span {
      color: orangered;
    }

    & h1 {
      font-size: 3rem;

      @media (min-width: 768px) {
        font-size: 4rem;
      }
    }
  }
  & ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index: 2000;
    cursor: pointer;

    & li {
      margin-top: 1rem;
      transition: all 0.3s ease;
      color: ${({ theme }) => theme.colors.grey};

      & span {
        margin-left: 2px;
        cursor: pointer;
      }

      @media (min-width: 768px) {
        margin-right: 1rem;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }
    }
    @media (min-width: 768px) {
      flex-direction: row;
      align-self: flex-start;
    }
  }
`;

export default StyledNavMenu;
