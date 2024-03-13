import React from "react";
import image3 from "../../Assets/image3.svg";

import image1 from "../../Assets/image1.svg";
import context2 from "../../Assets/context2.png";
import more from "../../Assets/seemore.svg";
import arrow from "../../Assets/arrow.png";
import image2 from "../../Assets/image2.svg";
import styled from "styled-components";
const Middle = () => {
  return (
    <DIV>
      <div id="right-div">
        <div>
          <div id="taekwondo">
            <div className="content">
              <h2>Top Boarding School in</h2>
              <h2>Uttarakhand, India</h2>
              
            </div>
          </div>
          <div id="horse">
            <div className="content">
            <h2>International School Award,</h2>
              <h2>India 2019</h2>
            </div>
            {/* <div>
                <img src={rectangle} alt="" />
            </div> */}
          </div>
        </div>
      </div>
      <div id="mid-div">
        {" "}
        <img src={more} alt="seemore" />{" "}
      </div>
      <div id="left-div">
        <div>
          <h1
            style={{
              textAlign: "start",
              fontFamily: "Fraunces",
              fontWeight: "400",
              width: "450px",
            }}
          >
            Awards and achievements, gleaming in sight, Honor efforts and
            perseverance in flight.
          </h1>
        </div>
        <div>
          {" "}
          <img src={context2} alt="context2" />{" "}
        </div>
        <div className="image-content">
          <div>
            {" "}
            <h2>Best Residential School</h2>
              <h2>Uttarakhand, India</h2>
          </div>{" "}
        </div>
        <div id="activity">
          <h3>SEE ALL AWARDS</h3>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </DIV>
  );
};

export default Middle;

const DIV = styled.div`
  display: flex;
  height: 918px;
  /* border: 1px solid red; */
  margin-top: 220px;

  #left-div {
    width: 51%;
  }
  #left-div div:nth-child(1) {
    /* background-color: yellow; */
    width: 636px;
    height: 134px;
    margin-top: 78px;
  }
  #left-div div:nth-child(2) img {
    /* background-color: yellow; */
    width: 186px;
    margin-top: -18px;
    margin-left: -440px;
  }
  .image-content {
    position: relative;
    background-image: url(${image2});
    background-size: cover;
    background-repeat: no-repeat;
    width: 513px;
    height: 288px;
    margin-top: 96px;
    margin-left: 122px;
    border-radius: 10px;
    align-items: end;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(
        0,
        0,
        0,
        0.5
      ); /* Adjust the alpha value for darkness */
      border-radius: 10px;
    }
  }
  #left-div div:nth-child(3) > div {
    position: relative;
    z-index: 1;
    height: 100px;
    width: 40%;
    top: 58%;
    padding: 5px 0 0 50px;
    color: white;
    margin-top: 96px;
    background-color: transparent;
    text-align: start;
  }
  #left-div div:nth-child(3) > div p {
    margin-top: -20px;
    font-weight: 500;
  }
  #activity {
    width: 371px;
    height: 49px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 111px;
    margin-left: 130px;
    border-radius: 30px;

    border: 2px solid #dbc79f;
  }
  #activity img {
    width: 53px;
    height: 28px;
  }

  #mid-div {
    width: 6%;
    margin-top: 28%;
    margin-left: 8%;
  }
  #mid-div img {
    width: 160px;
    height: 159px;
  }

  #right-div {
    width: 43%;
    display: flex;
    flex-direction: column;
    gap: 30%;
  }
  /* #right-div */
  #taekwondo {
    position: relative; /* Add position relative */
    background-image: url(${image3});
    background-size: cover;
    background-repeat: no-repeat;
    width: 513px;
    height: 288px;
    margin-top: 20%;
    margin-left: 14%;
    border-radius: 10px;
    border: 1px solid green;
    align-items: end;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(
        0,
        0,
        0,
        0.5
      ); /* Adjust the alpha value for darkness */
      border-radius: 10px;
    }
  }
  .content {
    position: relative;
    z-index: 1;
    height: 100px;
    width: 70%;
    padding: 5px 0 0 50px;
    color: white;
    margin-top: 200px;
    background-color: transparent;
    /* margin-bottom: 100px; */
    text-align: start;
  }
  .content h2 {
    margin-top: -20px;
    font-weight: 500;
  }

  #horse {
    position: relative;
    background-image: url(${image1});
    background-size: cover;
    background-repeat: no-repeat;
    width: 513px;
    height: 288px;
    margin-top: 22%;
    margin-left: 20%;
    border-radius: 10px;
    border: 1px solid green;
    align-items: end;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(
        0,
        0,
        0,
        0.5
      ); /* Adjust the alpha value for darkness */
      border-radius: 10px;
    }
  }
`;
