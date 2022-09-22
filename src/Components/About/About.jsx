import React from 'react'
import './About.css'
import Floating from '../Floating/Floating';
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import girl from "../../img/girl.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'
function About() {
    const transition = { duration: 3, type: "spring" };

    const theme =useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className="about">
        <div className="a-left">
            <div className="a-name">
                <span style={{color:darkMode?'white':''}}>
                    Hy! I am 
                </span>
                <span>
                Shivangi Indurakhya 
                </span>
                <span>
                Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
                </span>
            </div>
            <button className="button a-button">Hire me</button>
            <div className="a-icons">
                <img src={Github} alt="" className='a-ic'/>
                <img src={LinkedIn} alt="" className='a-ic'/>
                <img src={Instagram} alt="" className='a-ic'/>
            </div>
        </div>
        <div className="a-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" className='a-ic'/>
            <img src={girl} alt=""/>
            <motion.img
                initial={{ left: "-36%" }}
                whileInView={{ left: "-24%" }}
                transition={transition}
                src={glassesimoji} alt="" 
                id="hjhs"
                className='floating-div'/>
             
            <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            style={{top:'-4%', left:'68%'}}
            className='floating-div'>
                 <Floating image={crown} txt1="Web" txt2="Developer"/>
            </motion.div>
            
            <motion.div
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
             style={{top:'18rem', left:'0rem'}}
             className='floating-div'>
                 <Floating image={thumbup} txt1="Frontend" txt2="Developer"/>
            </motion.div>
            <div className="blur" style={{background: "rgb(238,210,255)"}}>
            <div className="blur" style={{
                background: "#c1f5ff",
                top:'26rem',
                width:'21rem',
                height:'11rem',
                left:'-25rem',
                }}></div>

            </div>
        </div>
    </div>
  )
}

export default About