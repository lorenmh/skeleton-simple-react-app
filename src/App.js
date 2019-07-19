import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import View from './View';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;

    font-family: Helvetica, Verdana, sans-serif;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
`;

export default class App extends Component {
  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <View />
      </StyledApp>
    );
  }
}
