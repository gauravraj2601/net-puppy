import React from 'react'
import styled from 'styled-components'
import ranking from "../../Assets/ranking.png"
const Ranking = () => {
  return (
    <DIV>
        <img src={ranking} alt="ranking" />
    </DIV>
  )
}

export default Ranking

const DIV= styled.div`
 img{
     width: 118%;
     height: 317px;
     margin-left: -9%;
 }
  

`