import React from 'react'
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Sidebar from "../../img/sidebar.png";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import './Projects.css';
import { themeContext } from "../../Context";
import { useContext } from "react";
const Projects = () => {
    const theme =useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
   <div className="project" id='Projects'>
    <span style={{color:darkMode?'white':''}}>Recent Projects</span>
    <span>Portfolio</span>
    <Swiper
    spaceBetween={20}
    slidesPerView={3}
    grabCursor={true}
    className="p-slider">
    <SwiperSlide>
        <div className='p-div'> 
            <img src={Sidebar} alt="" />
            <h1>Tittle</h1>
            <p className='p-des' style={{color:darkMode?'white':''}}>helksdkjasohdjksbahkg jcjkadsckjfghAUFb</p>
            <button className="button bt">Learn More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='p-div'> 
            <img src={MusicApp} alt="" />
            <h1>Tittle</h1>
            <p className='p-des' style={{color:darkMode?'white':''}}>helksdkjasohdjksbahkg jcjkadsckjfghAUFb</p>
            <button className="button bt">Learn More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='p-div'> 
            <img src={Ecommerce} alt="" />
            <h1>Tittle</h1>
            <p className='p-des' style={{color:darkMode?'white':''}}>helksdkjasohdjksbahkg jcjkadsckjfghAUFb</p>
            <button className="button bt">Learn More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='p-div'> 
            <img src={HOC} alt="" />
            <h1>Tittle</h1>
            <p className='p-des' style={{color:darkMode?'white':''}}>helksdkjasohdjksbahkg jcjkadsckjfghAUFb</p>
            <button className="button bt">Learn More</button>
            </div>
        </SwiperSlide>
    </Swiper>
   </div>
  )
}

export default Projects