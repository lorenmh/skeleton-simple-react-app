import React, { Component } from 'react';
import styled from 'styled-components';

const StyledView = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(97,99,106);
  color: rgb(30,30,30);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled.h1`
  margin: 0;
  font-size: 4em;
  color: rgb(255,93,93);
`;

export default class View extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUnmount() {
  }

  render() {
    return (
      <StyledView>
        <StyledHeading>Hello &#58;&#41;</StyledHeading>
      </StyledView>
    );
  }
}
