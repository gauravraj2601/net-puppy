import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Upper from "../components/HomePageComp/Upper"
import Video from "../components/HomePageComp/Video";
import Content from "../components/HomePageComp/Content";
import Management from "../components/HomePageComp/Management";


const HomePage = () => {
  return <DIV>
    <div id="navdiv" >
        <div className="container" >
        <Navbar />
        </div>
    </div>
    <div className="container">
        <Upper />
        <Video />
        <Content />
        <Management />
        <div>Container</div>
    </div>
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
        width: 1300px;
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
