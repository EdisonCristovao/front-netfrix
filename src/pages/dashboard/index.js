import React from "react";

import HeaderMain from "../../components/HeaderMain";
import styled from "styled-components";

const Jumbotron = styled.div`
  background-image: url('${(props) => props.src}');
  /* position: relative; */
  width: 100%;
  height: 98vh;
  background-size: cover;

`;

const JumbotronDetails = styled.div`
  padding-top: 8%;
  padding-left: 5%;

  width: 40%;

  p {
    color: white;
    font-size: 18px;
  }

  img {
    width: 75%;
  }
`;

const Dashboard = () => {
  return (
    <div>
      <HeaderMain></HeaderMain>
      <Jumbotron src="https://github.com/DZuz14/react-node-netflix/blob/master/src/img/wallpaper.jpg?raw=true">
        <JumbotronDetails>
          <img
            src="https://raw.githubusercontent.com/DZuz14/react-node-netflix/master/src/img/logo.png"
            alt="logo"
          ></img>

          <p>
            On the planet Latimer, Takeshi Kovacs must protect a tattooist while
            investigating the death of a yakuza boss alongside a no-nonsense
            CTAC.
          </p>
        </JumbotronDetails>
      </Jumbotron>
    </div>
  );
};

export default Dashboard;
