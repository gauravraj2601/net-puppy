import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return <DIV>
    <div id="navdiv" >
        <div className="container" >
        <Navbar />
        </div>
    </div>
    <div className="container">Container</div>
  </DIV>;
};

export default HomePage;

const DIV = styled.div`
  .container{
    border: 2px dotted black;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  }
  #navdiv{
    background-color: #b90124;
  }




  //  media query
  @media (min-width: 1200px) {
    .container{
        width: 1170px;
    }
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    .container{
    width: 700px;
    margin-right: auto;
    margin-left: auto;
    }
  }
`;
