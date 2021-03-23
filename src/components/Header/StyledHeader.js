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
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

export default StyledHeader;
