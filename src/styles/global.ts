import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap');

body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  overflow-x: hidden;
  scroll-behavior: smooth !important;
}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-track {
    background:${({ theme }) => theme.colors.darkGray};
}

::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.tertiary};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  clear: both;
  color: ${({ theme }) => theme.colors.darkGray};
  padding: 0;
  margin: 0 0 20px 0;
  font-weight: 600;
  line-height: ${({ theme }) => theme.font.sizes.small};
  font-family: 'Open Sans', sans-serif;
}

@media screen and (max-width: 991px) {
  body,
  html {
    font-size: ${({ theme }) => theme.font.sizes.small};
    line-height: ${({ theme }) => theme.font.sizes.small};
  }
  h2 {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    margin-bottom: 10px;
  }
}

`;

export default GlobalStyles;
