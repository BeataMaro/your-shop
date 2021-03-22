import styled from "styled-components";

const StyledHeader = styled.header`
  background: url("https://images.unsplash.com/photo-1595886395651-50524312a9bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")
    50% 20% / contain round rgb(200, 200, 200);
  background-size: cover;
  background-repeat: no-repeat;
  height: 60vh;
  width: 100%;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};

  @media (min-width: 768px) {
    height: 45vh;
    background-repeat: repeat;
    background-size: contain;
  }
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  & nav {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    justify-content: space-between;
  }
  .logo {
    color: white;
    background: black;
    align-self: flex-start;
    padding: 0.2em 0.6em;
    z-index: 200;

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
    z-index: 2;

    & li {
      margin-top: 1rem;
      transition: all 0.3s ease;
      color: ${({ theme }) => theme.colors.grey};
      cursor: pointer;

      & span {
        margin-left: 2px;
      }

      @media (min-width: 768px) {
        margin-right: 1rem;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
      }
    }
    @media (min-width: 768px) {
      flex-direction: row;
      align-self: flex-start;
    }
  }
`;

export default StyledHeader;
