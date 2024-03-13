import React from 'react'
import girls from "../../Assets/girls.svg"
import styled from 'styled-components'
const Video = () => {
  return (
    <DIV>
        
    </DIV>
  )
}

export default Video

const DIV= styled.div`
    background-image: url(${girls});
    background-repeat: no-repeat;
    background-size: cover;
    width: 117%;
    height: 912px;
    margin-left: -8.5%;
    border-radius: 20px;

`

/*
  position: relative; 
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
    );
    border-radius: 10px;
  }
 */