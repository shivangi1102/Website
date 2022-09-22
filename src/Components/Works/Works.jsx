import React from 'react'
import './Works.css'
import exp1 from '../../img/exp1.png'
import exp2 from '../../img/exp2.png'
import exp3 from '../../img/exp3.png'
import exp4 from '../../img/exp4.png'
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Works = () => {
    const theme =useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className="works" id='Works'>
        <div className="w-left">
            <span style={{color:darkMode?'white':''}}>Works &</span> 
            <span>Experince</span>
            <span style={{color:darkMode?'white':''}}>Tata Consultancy Services</span>
            <br/>
            <span>2021-Present</span>
           <ul className='w-ul'>
            <li>
            Developing functionalities, new features and capabilities for a web application <br/>
            using Reactjs, Typescript
and Mobx (state management tool).
            </li>
            <li>
            Working directly with client stakeholders to develop the solution for business cases.
            </li>
            <li>
            Performing bug fixes and code review to increase the performance.
            </li>
            <li>Following the MVVM architecture of building the <br/> application by splitting the application in 3 common 
layers</li>
           </ul>
           <button className="button w-button">Hire Me</button>
            <div className="blur w-blur" style={{background:'#ABF1FF94'}}></div>
        </div>
        <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-main"
        >
            
                <div className="w-secondary">
                    <img src={exp1} alt=""></img>
                </div>
                <div className="w-secondary">
                    <img src={exp2} alt=""></img>
                </div>
                <div className="w-secondary">
                    <img src={exp3} alt=""></img>
                </div>
                <div className="w-secondary">
                    <img src={exp4} alt=""></img>
                </div>
            </motion.div>
            <div className="w-backcircle blue"></div>
            <div className="w-backcircle yellow"></div>
        </div>
    </div>
  )
}

export default Works