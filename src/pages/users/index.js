import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "./../../components/Header";
import Button from "./../../components/Button";

const Container = styled.div`
  background-color: #141414;
  width: 100vw;
  height: 100vh;
`;
const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  h1 {
    font-size: 5rem;
    font-weight: 300;
    color: white;
  }
`;
const UserList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  :hover {
    color: white;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0px 20px;
    img {
      border: 4px solid transparent;

      height: 150px;
      :hover {
        cursor: pointer;
        border: 4px solid #fff;
      }
    }

    span {
      font-size: 2rem;
      color: grey;
      margin-top: 10px;

      :hover {
        color: white;
      }
    }
  }
`;

function Users() {
  return (
    <Container>
      <Header></Header>
      <UserContainer>
        <h1>Who's watching?</h1>
        <UserList>
          <div>
            <img src={"img"} alt=""></img>
            <span>{"Lucas"}</span>
          </div>
        </UserList>
        <Button></Button>
      </UserContainer>
    </Container>
  );
}

export default Users;
