import React from "react";
import "./FooterStyle.css"
import { FaHome,FaPhone, FaFacebook, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">

                <div className="location">
                    <h4><FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        Amar Palace Mira Road
                    </h4>
                </div>

                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        986-456-5689
                    </h4>
                </div>

                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        salman@gmail.com
                    </h4>
                </div>

            </div>


            <div className="right">
                <h4>About Myself</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptates unde quasi ratione aut incidunt?</p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
