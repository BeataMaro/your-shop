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

ion-icon {
  font-size: 2rem;

}

.line {
  width: 50%;
  border-bottom: 1px solid teal;
  transition: .3s ease-in;
  margin: auto;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0,0,0,.1);
  transform: scale(.7);
  opacity: .7;
}
`;

export default GlobalStyle;
