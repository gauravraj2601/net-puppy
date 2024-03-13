import React from "react";
import styled from "styled-components";
import students from "../../Assets/students.svg"
import options from "../../Assets/options.png"
const Management = () => {
  return (
    <DIV>
      <span style={{ color: "#202833" }}>Why</span>{" "}
      <span style={{ color: "#B90124" }}>TIS ?</span>
      <div id="manage-container">
        <div id="content1" className="font-goudy">
          <h3>A FOCUS ON...</h3>
          <h2>MANAGEMENT</h2>
          <p>
            Extremely Friendly and Approachable Management. | Tula’s
            International School combines - respect for | tradition with a
            progressive application of modern | sciences, academic rigour with a
            caring heart, and individual appreciation with the warmth of a
            school | community |
          </p>
        </div>
        <div id="content-img">
            <img src={students} alt="students" />
        </div>
        <div id="content2">
        <img src={options} alt="options" />
        </div>
      </div>
    </DIV>
  );
};

export default Management;

const DIV = styled.div`
  height: 500px;
  border: 1px solid red;
  span {
    font-size: 30px;
    font-family: "Abril Fatface", serif;
    font-weight: 400;
    font-style: normal;
  }
  #manage-container {
    display: flex;
    gap: 55px;
  }
  #content1 {
    width: 450px;
    margin-left: 85px;
  }
  #content-img {
    width: 370px;
    /* border: 1px solid red; */
  }
  #content2 {
    width: 95px;
    /* border: 1px solid red; */
  }
  .font-goudy {
    font-family: "Sorts Mill Goudy", serif;
    font-weight: 400;
    font-style: normal;
  }
  #content1 h3 {
    color: #202833;
    width: 272px;
    height: 48px;
    text-align: start;
    margin-top: 100px;
    font-size: 30px;
    /* margin-left: ; */
  }
  #content1 h2 {
    color: #b90124;
    width: 271px;
    height: 32px;
    font-size: 40px;
    margin-left: 100px;
    margin-top: -47px;
  }
  #content1 p {
    width: 420px;
    height: 170px;
    font-size: 20px;
    text-align: start;
    margin-left: 35px;
    margin-top: 40px;
  }
  #content-img img{
    width: 370px;
    height: 688px;
    margin-top: -120px;
    margin-left: 20px;
  }
  #content2 img {
    width: 78px;
    height: 345;
    margin-top: 32px;
  }
`;
