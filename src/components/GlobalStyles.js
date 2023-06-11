import styled, { createGlobalStyle } from 'styled-components';

export const AppBox = styled.div`
  background-color: wheat;
`;

export const GlobalStyle = createGlobalStyle`
    box-sizing: content-box;
    body {
        margin: 0;
        padding: 0;
    }
  ul {
  list-style-type: none;
}
a{text-decoration: none}
`;
