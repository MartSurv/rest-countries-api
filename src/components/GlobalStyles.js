import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 55%;
    }
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
  }
  a:link, a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
  .container {
    padding: 8rem 10rem;
  }

  @media only screen and (max-width: 1100px) {
    .container {
      padding: 4rem 3rem;
    }
  }
  .card__content {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .btn {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .country__border {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .search__search-bar {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .search__search-bar::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
  .search__icon {
    fill: ${({ theme }) => theme.placeholder};
  }
  .icon {
    fill: ${({ theme }) => theme.text};
  }
  `;
