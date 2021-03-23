import styled from "styled-components";

const StyledNavbar = styled.nav`
  & ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.lightgrey};
    background-color: #ebf0f5;
    width: 90%;
    margin: auto;

    .nav-item {
      flex-basis: 100%;
      display: grid;
      place-items: center;
      margin: 1em 0 1em;
      min-height: 400px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding-top: 1rem;
      box-shadow: ${({ theme }) => theme.shadows.boxShadow};
      overflow: hidden;
      cursor: pointer;
      transition: ${({ theme }) => theme.transitions.quick};
      &:hover {
        img {
          transform: scale(1.1);
        }
        .link::after {
          width: 100%;
        }
      }

      .link {
        color: teal;
        display: inline-block;
        overflow: hidden;

        &::after {
          content: "";
          display: block;
          width: 0;
          height: 1px;
          background-color: teal;
          transition: width 0.3s;
        }
      }

      img {
        margin-top: 2em;
        max-width: 100%;
        height: 400px;
        transition: ${({ theme }) => theme.transitions.quick};
      }

      &:hover {
        box-shadow: ${({ theme }) => theme.shadows.boxShadowHover};
        color: ${({ theme }) => theme.colors.gold};
      }
    }
    @media (min-width: 986px) {
      width: 70%;
      flex-direction: row;
    }
  }
`;

export default StyledNavbar;
