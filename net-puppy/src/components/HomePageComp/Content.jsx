import React from "react";
import styled from "styled-components";
import women from "../../Assets/women.svg";
import arrow from "../../Assets/arrow.png";
const Content = () => {
  return (
    <DIV>
      <div id="image-div">
        <img src={women} alt="" />
      </div>
      <div id="content-div">
        <h1>At Tula’s, we ask, “How can we make school better?”</h1>
        <p>
          Using the latest research on how girls learn best, we designed an
          innovative modular schedule, personalized for each student. Our girls
          are focused, not overwhelmed. “Girls Rule” isn’t just a saying here.
          Develop leadership skills, build compassion, gain responsibility, and
          prepare to change the world.
        </p>
        <div id="activity">
          <h3>LEARN MORE</h3>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </DIV>
  );
};

export default Content;

const DIV = styled.div`
  /* background */
  height: 500px;
  display: flex;
  justify-content: start;
  align-items: start;
  text-align: start;
  gap: 135px;
  margin-top: 90px;
  /* border: 1px solid red; */

  #image-div {
    width: 296px;
    margin-left: 104px;
    display: flex;
    justify-content: center;
    align-items: start;
  }
  #image-div img {
    width: 296px;
    height: 401px;
  }
  #content-div {
    width: 45%;
    padding: 10px;
  }
  #content-div h1 {
    font-family: mirador;
    color: #b90124;
  }

  #activity {
    width: 371px;
    height: 49px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 190px;
    margin-top: 100px;

    border-radius: 30px;

    border: 1px solid #dbc79f;
  }
  #activity img {
    width: 53px;
    height: 28px;
  }
`;
