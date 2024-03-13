import React from "react";
import horse from "../../Assets/horse.svg";
import swim from "../../Assets/swimming.svg";
import taek from "../../Assets/taekwondo.svg";
import context from "../../Assets/context.png";
import context2 from "../../Assets/context2.png";
import more from "../../Assets/seemore.svg";
import arrow from "../../Assets/arrow.png";
import rectangle from "../../Assets/Rectangle 19.svg";
import styled from "styled-components";
const Upper = () => {
  return (
    <DIV>
      <div id="left-div">
        <div>
          {" "}
          <img src={context} alt="context" />{" "}
        </div>
        <div>
          {" "}
          <img src={context2} alt="context2" />{" "}
        </div>
        <div className="image-content">
          <div>
            {" "}
            <h1>Swimming</h1>
            <p>22 Acres, Pollution- Free,</p>
            <p>World-Class</p>
          </div>{" "}
        </div>
        <div id="activity">
            <h3>SEE ALL ACTIVITIES</h3>
            <img src={arrow} alt="arrow" />
        
        </div>
      </div>
      <div id="mid-div">
        {" "}
        <img src={more} alt="seemore" />{" "}
      </div>
      <div id="right-div">
        <div>
          <div id="taekwondo">
            <div className="content">
              <h1>Taekwondo</h1>
              <p>22 Acres, Pollution- Free,</p>
              <p>World-Class</p>
            </div>
          </div>
          <div id="horse">
            <div className="content">
              <h1>Horse Riding</h1>
              <p>22 Acres, Pollution- Free,</p>
              <p>World-Class</p>
            </div>
            {/* <div>
                <img src={rectangle} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default Upper;

const DIV = styled.div`
  display: flex;
  height: 958px;
  #left-div {
    width: 51%;
  }
  #left-div div:nth-child(1) {
    /* background-color: yellow; */
    width: 636px;
    height: 134px;
    margin-top: 78px;
  }
  #left-div div:nth-child(2) {
    /* background-color: yellow; */
    width: 426px;
    height: 48px;
    margin-top: 14px;
  }
  .image-content {
    position: relative; 
    background-image: url(${swim});
    background-size: cover;
    background-repeat: no-repeat;
    width: 513px;
    height: 288px;
    margin-top: 96px;
    margin-left: 62px;
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
  #activity{
    width: 371px;
    height: 49px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 161px;
    margin-left: 50px;
    border-radius: 30px;
    
    border: 1px solid #dbc79f;
  }
  #activity img{
    width: 53px;
    height: 28px;
  }

  #mid-div {
    width: 6%;
    margin-top: 32%;
    margin-left: -3%;
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
    background-image: url(${taek});
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
    width: 40%;
    padding: 5px 0 0 50px;
    color: white;
    margin-top: 170px;
    background-color: transparent;
    /* margin-bottom: 100px; */
    text-align: start;
  }
  .content p {
    margin-top: -20px;
    font-weight: 500;
  }

  #horse {
    position: relative;
    background-image: url(${horse});
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
