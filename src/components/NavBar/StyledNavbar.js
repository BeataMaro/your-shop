import styled from "styled-components";
import women from "../../assets/images/wesley-tingey-unsplash.jpg";
import men from "../../assets/images/nordgreen-unsplash.jpg";

export const StyledNavbar = styled.nav`
  & ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.lightgrey};
    background-color: ${({ theme }) => theme.colors.greyblue};
    width: 90%;
    margin: auto;

    .nav-item {
      background-color: ${({ theme }) => theme.colors.white};
      /* flex-basis: 100%; */
      display: grid;
      place-items: center;
      margin: 1em;
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
    @media (min-width: 768px) {
      width: 80%;
      flex-direction: row;
    }
  }
`;

export const StyledAsideNavBar = styled.div`
  background-color: black;
  width: 200px;
  height: 200px;
`;

export const StyledAsideImage = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: pink;
  background-image: ${({ gender }) =>
    gender === "women" ? `url(${women})` : `url(${men})`};
  background-size: cover;
  display: grid;
  place-items: center;
  .title {
    padding: 1rem;
    background-color: white;
    color: ${({ gender }) => (gender === "women" ? "pink" : "red")};
    /* position: absolute; */
    /* top: 0; */
    /* right: 0; */
  }
`;
