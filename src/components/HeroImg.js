import "./HeroimgStyles.css";

import React from 'react'

import IntroImg from "../assets/intro-bg.webp"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">

        <div className="mask">
          <img className="into-img" src={IntroImg} alt="introImg" />
        </div>

        <div className="content">
          <p>Hi,I am a FREELANCER.</p>
          <h1>React Developer</h1>
          <Link to="/project" className="btn">PROJECT</Link>
          <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
    </div>
  )
}

export default HeroImg
