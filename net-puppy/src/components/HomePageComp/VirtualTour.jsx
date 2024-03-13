import React from 'react'
import styled from 'styled-components'
import university from "../../Assets/university.svg"
const VirtualTour = () => {
  return (
    <DIV>
        <div className='content'>
            <h1>DIVINE INTO OUR...</h1>
            <h1>VIRTUAL TOUR</h1>
        </div>
        <div id='content'>
            <div>
                <h1>100%</h1>
                <p>College Acceptance</p>
            </div>
            <div className='vertical-line'></div>
            <div>
                <h1>20</h1>
                <p>Years of Educational Excellence</p>
            </div>
            <div className='vertical-line'></div>
            <div>
                <h1>60%</h1>
                <p>STEM Program Participation</p>
            </div>
            <div className='vertical-line'></div>
            <div>
                <h1>15+</h1>
                <p>Extracurricular Activities</p>
            </div>
        </div>
    </DIV>
  )
}

export default VirtualTour

const DIV= styled.div`
    position: relative;
  display: flex;
  justify-content: center;
  background-image: url(${university});
  background-repeat: no-repeat;
  background-size: cover;
  width: 117%;
  height: 660px;
  margin-left: -8.5%;
  border-radius: 20px;

  .content {
    position: relative;
    z-index: 1;
    height: 150px;
    width: 25%;
    padding: 5px 0 0 50px;
    color: white;
    margin-top: 15%;
    margin-left: 10%;
    background-color: transparent;
    /* margin-bottom: 100px; */
    
    font-family: "Sorts Mill Goudy", serif;

  }
  .content h1:nth-child(1){
    margin-left: -140px;
  }
  .content h1:nth-child(2){
    margin-left: 20px;
  }
  #content{
    width: 1100px;
    height: 130px;
    position: absolute;
    bottom: -80px;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    background-color: #b90124;
    color: white;
    
}
#content p{
      font-family: "Sorts Mill Goudy", serif;

  }
  .vertical-line{
        border-left: 0.5px solid rgba(255, 255, 255, 0.5);
        height: 80px;
        margin-top: 20px;

    }
`