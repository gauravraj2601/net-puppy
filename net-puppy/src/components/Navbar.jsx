import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NAV>
        <div id='left-part'>
            <ul>
                <li>INQUIRE</li>
                <li>APPLY</li>
                <li>SUPPORT US</li>
            </ul>
        </div>
        <div id='vertical-line'></div>
        <div id='right-part'>
            <ul>
                <li>PARENTS</li>
                <li>ALUMS</li>
            </ul>
        </div>
    </NAV>
  )
}

export default Navbar

const NAV= styled.div`
    background-color: #b90124;
    display: flex;
    gap: 3%;
    margin-left:10%;
    color: white;
    
    ul{
        display: flex;
        justify-content: space-between;
        list-style-type: none;
    }
    #left-part{
        width: 45%;
        margin-right:1%;
        font-weight: 600;
        
    }
    #right-part{
        width: 25%;
    }
    #vertical-line{
        border-left: 0.5px solid rgba(255, 255, 255, 0.5);
        height: 37px;
        margin-top: 7px;

    }
`