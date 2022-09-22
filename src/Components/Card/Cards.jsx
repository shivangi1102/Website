import React from 'react'
import './Cards.css'
import { themeContext } from "../../Context";
import { useContext } from "react";
const Cards = ({Emoji,heading,skills}) => {
  const theme =useContext(themeContext);
  const darkMode=theme.state.darkMode;

    const list=skills.map((skill)=>
     <li className='c-li'>{skill}</li>
    )
  return (
   <div className="cards">
    <img src={Emoji}/>
    <span>{heading}</span>
    <ul style={{listStyleType:'none'}}>{list}</ul>
   </div>
  )
}

export default Cards