import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  .navbar {
    background: ${({ theme }) => theme.navBody};
    color: ${({ theme }) => theme.navText};
    transition: all 0.25s linear;
  }
  .navbar .links a {
    color: ${({ theme }) => theme.navText};
  }


  .post-list-item {
    border-bottom:  1px solid;
    border-color: ${({ theme }) => theme.text};
  }

  .links-active {
    border-bottom: 3px solid;
    border-color: ${({ theme }) => theme.navText};
    border-radius: 5px;
  }
  `

  