import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  @media only screen and (max-width: 375px) {
    html {
      font-size: 50%;
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
    transition: background-color 0.50s linear, color 0.50s linear;
  }
  a:link, a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
  .container {
    padding: 8rem 10rem;
  }

  @media only screen and (max-width: 375px) {
    .container {
      padding: 4rem 2rem;
    }
  }
  .card__content {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.1s 0.5s linear, color 0.1s 0.5s linear;
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
  .icon {
    fill: ${({ theme }) => theme.text};
  }
  `;
