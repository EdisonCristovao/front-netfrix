import React from "react";

import styled from "styled-components";

// import { Container } from './styles';
const ButtonContainer = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  border: 1px solid grey;
  color: grey;

  span {
    font-size: 2rem;
    font-weight: 100;
  }

  :hover {
    border: 1px solid white;
    color: white;
  }
`;

function Button() {
  return (
    <ButtonContainer>
      <span>MANAGE PROFILES</span>
    </ButtonContainer>
  );
}

export default Button;
