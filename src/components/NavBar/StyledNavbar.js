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
      display: grid;
      place-items: center;
      /* margin: 1em; */
      min-height: 400px;
      min-width: 200px;
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

export const StyledAsideNavBar = styled.nav`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  width: 0%;
  height: 250px;
  margin: auto;
  text-align: center;
  position: relative;

  @media (min-width: 768px) {
    width: 55%;
    height: 300px;
  }
`;

export const StyledAsideImage = styled.div`
  position: absolute;
  left: ${({ gender }) => (gender === "women" ? 0 : "")};
  right: ${({ gender }) => (gender === "men" ? 0 : "")};
  width: 46%;
  height: 100%;
  border-radius: 5px;
  background-image: ${({ gender }) =>
    gender === "women" ? `url(${women})` : `url(${men})`};
  background-position: ${({ gender }) =>
    gender === "women" ? "center" : "right"};
  background-size: cover;
  background-repeat: no-repeat;
  transition: ${({ theme }) => theme.transitions.quick};
  overflow: hidden;
  /* box-shadow: 0 25px 25px -35px rgba(0, 0, 0, 0.15); */

  & .title {
    position: absolute;
    bottom: top;
    width: 130%;
    left: ${({ gender }) => (gender === "women" ? 0 : "")};
    right: ${({ gender }) => (gender === "men" ? 0 : "")};
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    text-align: center;
    font-weight: 700;
    transition: ${({ theme }) => theme.transitions.quick};
    opacity: 0.6;

    &.women,
    &.men {
      background-color: ${({ theme }) => theme.colors.white};
      color: teal;
      opacity: 1;
    }

    &.women {
      transform: rotate(9deg);
    }

    &.men {
      transform: rotate(-9deg);
    }
  }

  &:hover {
    .title {
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    background-position: ${({ gender }) =>
      gender === "women" ? "left" : "top"};
  }
`;
