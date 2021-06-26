import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
    background: ${({ theme }) => theme.navBody};
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

  pre {
        background-color: ${({ theme }) => theme.codeBlock};
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }

  .tag-wrapper {
    margin-bottom: 1.5rem;
    border-bottom: 2px dashed;
    border-color: ${({ theme }) => theme.text};
    padding-bottom: 1.5rem;
}


  `

  