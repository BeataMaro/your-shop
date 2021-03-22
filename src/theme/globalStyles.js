import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

html {
  font-size: 62.5%;
}
body {
  font-size: ${({ theme }) => theme.fonts.fsNormal};

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

`;

export default GlobalStyle;
