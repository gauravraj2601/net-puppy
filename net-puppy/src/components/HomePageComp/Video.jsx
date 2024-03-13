import React from "react";
import girls from "../../Assets/girls.svg";
import { FaYoutube } from "react-icons/fa";

import styled from "styled-components";
const Video = () => {
  return (
    <DIV>
      <FaYoutube className="youtube" size={172} color="white" />
    </DIV>
  );
};

export default Video;

const DIV = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-image: url(${girls});
  background-repeat: no-repeat;
  background-size: cover;
  width: 117%;
  height: 912px;
  margin-left: -8.5%;
  border-radius: 20px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;

  }
  .youtube {
    position: relative;
    z-index: 1;
    margin-top: 24%;

  }
`;
