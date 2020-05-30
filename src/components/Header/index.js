import React from "react";

import styled from "styled-components";

import Logo from "./../../assets/logo.png";

const HeaderContainer = styled.div`
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
