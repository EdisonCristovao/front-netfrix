import React from "react";

import styled from "styled-components";

import Logo from "./../../assets/logo.png";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;

  height: 6%;
  padding: 5px 20px;
  background: linear-gradient(black, transparent);
  img {
    width: 9%;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo netflix"></img>
    </HeaderContainer>
  );
}

export default Header;
