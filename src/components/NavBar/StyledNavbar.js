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
  display: flex;
  flex-direction: column;
  background-color: black;
  border-radius: 15px;
  width: 90%;
  height: 350px;
  margin: auto;
  /* position: sticky; */
  /* top: 20vh; */
  border: 6px solid black;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 75%;
    height: 300px;
  }

  & .title {
    padding: 0.5rem;
    background-color: black;
    color: grey;
    transition: ${({ theme }) => theme.transitions.quick};
  }

  &:hover {
    .half {
      transform: scale(0.8);
    }
  }

  @media (min-width: 768px) {
    /* max-width: 200px; */
  }
`;

export const StyledAsideImage = styled.div`
  position: absolute;
  left: ${({ gender }) => (gender === "women" ? 0 : "")};
  right: ${({ gender }) => (gender === "men" ? 0 : "")};
  width: 50%;
  height: 100%;
  border-radius: 15px;
  background-color: black;
  background-image: ${({ gender }) =>
    gender === "women" ? `url(${women})` : `url(${men})`};
  background-position: ${({ gender }) =>
    gender === "women" ? "center" : "right"};
  background-size: cover;
  background-repeat: no-repeat;
  transition: ${({ theme }) => theme.transitions.quick};

  &:hover {
    /* & {
      transform: scale(0.8);
    } */
    .title {
      font-size: 3rem;
      color: teal;
      transform: ${({ gender }) =>
        gender === "women" ? "rotate(-9deg)" : "rotate(9deg)"};
    }
  }

  @media (min-width: 768px) {
    background-position: ${({ gender }) =>
      gender === "women" ? "left" : "top"};
  }
`;
