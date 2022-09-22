import React from 'react'
import './Skills.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Cards from '../Card/Cards';
import Resume from './resume.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Skills = () => {

  const transition = {
    duration: 2,
    type: "spring",
  };

  const theme =useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className="skills" id='Skills'>
        <div className="s-left">
            <span style={{color:darkMode?'white':''}}>Skills</span>
            <span>
            Frontend Developer with high level of experience in web designing
            <br/>
            and development, producting the Quality work
            </span>
           <a href={Resume} download> <button className="button s-button">Download Resume</button></a>
            <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>
       <div className="s-right">
        <motion.div initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}>
          <Cards
          Emoji={HeartEmoji}
          heading="Programming"
          skills={['C++','Python','Javascript']}
          />
        </motion.div>
        <motion.div  initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}>
          <Cards
          Emoji={Glasses}
          heading="Development"
          skills={['ReactJs','Html','CSS','Redux','Typescript']}
          />
          </motion.div>
          <motion.div initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}>
          <Cards
          Emoji={Humble}
          heading="Tools"
          skills={['Git','Data Structures & Algorithms','Vscode']}
          />
          </motion.div>
          <div className="blur s-blur2" style={{background:'var(--purple'}}></div>
       </div>
    </div>
  )
}

export default Skills