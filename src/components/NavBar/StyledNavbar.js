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
      margin: 1em;
      min-height: 400px;
      min-width: 300px;
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
  flex-direction: column;
  border-radius: 15px;
  width: 90%;
  height: 350px;
  margin: auto;
  border: 1px solid grey;
  position: relative;
  /* overflow: hidden; */
  cursor: pointer;
  box-shadow: 0 25px 25px -35px rgba(0, 0, 0, 0.15);

  //invisible shadow...
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 80%;
    bottom: 0.6em;
    z-index: -1;
    box-shadow: 0 0.5em 0.5em 0em rgba(black, 0.15);
  }

  &::before {
    left: 0.25em;
    right: 2em;
    background: pink;
    transform: rotate(-3deg);
  }
  &::after {
    right: 0.25em;
    left: 2em;
    background: lightblue;
    transform: rotate(3deg);
  }

  @media (min-width: 768px) {
    width: 75%;
    height: 300px;
  }
`;

export const StyledAsideImage = styled.div`
  position: absolute;
  left: ${({ gender }) => (gender === "women" ? 0 : "")};
  right: ${({ gender }) => (gender === "men" ? 0 : "")};
  width: 50%;
  height: 100%;
  transform: scale(0.8);
  border-radius: 15px;
  background-image: ${({ gender }) =>
    gender === "women" ? `url(${women})` : `url(${men})`};
  background-position: ${({ gender }) =>
    gender === "women" ? "center" : "right"};
  background-size: cover;
  background-repeat: no-repeat;
  transition: ${({ theme }) => theme.transitions.quick};
  overflow: hidden;

  & .title {
    width: 130%;
    position: absolute;
    bottom: 0;
    left: ${({ gender }) => (gender === "women" ? 0 : "")};
    right: ${({ gender }) => (gender === "men" ? 0 : "")};
    padding: 0.5rem;
    background-color: black;
    font-size: 2rem;
    font-weight: 700;
    border: none;
    outline: none;

    transition: ${({ theme }) => theme.transitions.quick};

    &.women,
    &.men {
      background-color: ${({ theme }) => theme.colors.white};
    }

    &.women {
      color: violet;
      transform: rotate(-10deg);
    }

    &.men {
      color: teal;
      transform: rotate(10deg);
    }
  }

  &:hover {
    .title {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 768px) {
    background-position: ${({ gender }) =>
      gender === "women" ? "left" : "top"};
  }
`;
