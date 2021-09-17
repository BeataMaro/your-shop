import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

html {
  font-size: 62.5%;
}
body {
  font-size: ${({ theme }) => theme.fonts.fsNormal};
}

html, body {
  min-height: 100%;
}

.App {
  text-align: center;
  color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: white;
}

.switch-wrapper {
  position: relative;
}


::selection {
  background-color: ${({ theme }) => theme.colors.gold} ;
}

.start-modal {
  padding: 1rem;
  cursor: pointer;
  background-color: black;
  color: tomato;
  box-shadow: inset 1px 1px 20px  rgba(0,0,0,.6);
}

ul li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
}

.line {
  width: 50%;
  border-bottom: 1px solid teal;
  transition: .3s ease-in;
  margin: auto;
}

.sticky {
  position: fixed;
  top: -2%;
  width: 100%;
  background-color: rgba(0,0,0,.2);
  transform: scale(.9);
  opacity: .7;
  
  @media (min-width: 768px) {
    transform: scale(.8);
  }
  
  &:hover {
    opacity: 1;
    background-color: rgba(0,0,0,.6);
  }

   & .menu-item {
     color: ${({ theme }) => theme.colors.white};
   }

  & .menu-item:hover {
      color: violet;
  }
}
  .button {
    display: flex;
    justify-content: space-between;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.grey};
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem;
    border: none;
    opacity: 0;
    transition: all 0.3s ease-in;
    cursor: pointer;

    & span {
      margin-left: 10px;
    }

    &:hover {
      color: white;
      background-color: black;
    }
    &:focus {
      outline: 0.1px solid grey;
      outline-offset: -5px;
    }
    &:active {
      color: white;
    }
  }
`;

export default GlobalStyle;
