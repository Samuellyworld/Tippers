// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

/* stylelint-disable */
import { createGlobalStyle } from 'styled-components';


// styled components global styles
export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: inherit;
  }

  html, 
  body {
    height:100%; 
    padding:0; 
    margin:0; 
    width:100%;
  }
  
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    display:flex; 
    flex-direction:column;
    overflow-x: hidden;
    /* background: ${({ theme }) => theme.colors.nero}; */
    color: ${({ theme }) => theme.colors.nero};
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  /* since next js adds a wrapper div inside body tag, give it 
  a 100% height so the children can have 100% height if needed. */
  #__next {
    height: 100%;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,  
  fieldset,
  label {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
