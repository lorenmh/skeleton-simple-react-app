import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { incrementCount, decrementCount } from '../actions';

const StyledView = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(97,99,106);
  color: rgb(30,30,30);
`;

const StyledHeading = styled.h1`
  margin: 0;
  font-size: 4em;
  color: rgb(255,93,93);
`;

class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUnmount() {
  }

  render() {
    window.f = this.props.incrementCount;
    return (
      <StyledView>
        <StyledHeading>Hello &#58;&#41;</StyledHeading>
        <StyledHeading>{this.props.count}</StyledHeading>
      </StyledView>
    );
  }
}

const mapStateToProps = ({ count }) => ({ count });
const mapDispatchToProps = { incrementCount, decrementCount };

export default connect(mapStateToProps, mapDispatchToProps)(Root);
