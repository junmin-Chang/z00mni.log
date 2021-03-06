import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle<any>`
:root {
  --nav-background: #ffffff;
  --nav-link-color: #949494;
  --nav-link-color-hover: #000000;
  --nav-height: 50px;
  --post-list-item-border: #e0e0e0;
  --post-list-item-hover: #e0e0e0;
  --post-list-item-date: #949494;
  --post-list-item-tag: #2ec4ff;
}
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
    background: linear-gradient(72deg,#291e95,#cc007a);
    background-image: linear-gradient(72deg,rgb(41, 30, 149), rgb(204, 0, 122));
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    color: ${({ theme }) => theme.navText};
    transition: all 0.25s linear;
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    overflow: hidden;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  hr {
    margin-top: 1rem;
    border-color: ${({ theme }) => theme.text};
  }


  .tag-wrapper {
    margin-bottom: 1.5rem;
    border-bottom: 2px dashed;
    border-color: ${({ theme }) => theme.text};
    padding-bottom: 1.5rem;
}
  `

  