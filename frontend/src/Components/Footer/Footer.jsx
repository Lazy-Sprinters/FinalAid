import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./style.css";

const Footer = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <div className="bdy">
        <div className="divi">
          <hr style={{height:"2px" ,borderWidth:"0px", backgroundColor:"#D7D8DE" }} />
          <div className="divi" style={{color: "#fff", paddingTop: "50px",backgroundColor:"black",textAlign:"center"}}>
            <div className="divi" style={{fontSize: "40px"}}>
              <span style={{color: "#d7d8de" }}>Final </span>Aid
            </div>
            <div className="divi" style={{fontSize: "15px"}}>
              <i>Support the nameless and helpless.</i>
            </div>
            <div className="divi" style={{paddingTop: "30px", paddingBottom: "10px"}}>
              <i id="icon" style={{paddingRight:"20px"}} class="fa fa-facebook" aria-hidden="true">  </i> 
              <i id="icon" style={{paddingRight:"20px"}} class="fa fa-twitter" aria-hidden="true">  </i>  
              <i id="icon" style={{paddingRight:"20px"}} class="fa fa-instagram" aria-hidden="true">  </i>  
            </div>
            <div className="divi" style={{paddingTop:"20px", fontSize: "14px"}}>
              &copy;&nbsp;2021 FinalAid. All Rights Reserved
            </div>
            <div className="divi" style={{fontSize: "12px", paddingBottom: "15px"}}>
              <span style={{color: "#d7d8de"}}>Designed by </span>
              <a
                href="https://github.com/Lazy-Sprinters"
                target="_blank"
                style={{color: "white"}}
              >
                Lazy Sprinters
              </a>
            <br/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
