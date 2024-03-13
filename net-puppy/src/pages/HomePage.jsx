import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Upper from "../components/HomePageComp/Upper"
import Video from "../components/HomePageComp/Video";
import Content from "../components/HomePageComp/Content";
import Management from "../components/HomePageComp/Management";
import VirtualTour from "../components/HomePageComp/VirtualTour";
import Middle from "../components/HomePageComp/Middle";
import Ranking from "../components/HomePageComp/Ranking";


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
        <VirtualTour />
        <Middle />
        <Ranking />
        <div>Container</div>
    </div>
  </DIV>;
};

export default HomePage;

const DIV = styled.div`
  .container{
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
