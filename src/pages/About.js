import React from "react";
import "../styles/Section.css";
import "../styles/About.css";
import IconOne from "../img/icons/WebIcon1.png";
import IconTwo from "../img/icons/WebIcon2.png";
import IconThree from "../img/icons/WebIcon3.png";
import IconFour from "../img/icons/WebIcon4.png";
import Gdesign from "../img/graphic design computer image.png";
import Wdesign from "../img/webdesign computer image.png";
import GSkills from "../img/Skillset Images.png";
import WSkills from "../img/Web Development.png";

function Section() {
  return (
    <main>
      <div className="bgc-white">
        <div className="container padding-tb-60">
          <div className="row padding-left-60">
            <div className="col">
              <h1>Lea Guerrero Designs</h1>
              <p>
                Providing creative, original, and attention getting designs for
                graphics, web sites, video creation, 3D animation and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="blockThree">
      <div className="center bgc-grey">
          <div className="container ">
            <div className="container">
              <div className="row ">
                <div className="col">
                  <div className="grey-box">
                  <img className="icons" src={IconOne} alt="Icon 1" />
                  <h4 className="text-color-white" >Graphic Design</h4>
                  <h6 className="text-color-white">10+ Years Experience</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="grey-box">
                  <img className="icons" src={IconTwo} alt="Icon 2" />
                  <h4 className="text-color-white" >Web Development</h4>
                  <h6 className="h6 text-color-white">5+ Years Experience</h6>
                  </div>
                </div>
                <div className="col">
                  <div className="grey-box">
                  <img className="icons" src={IconThree} alt="Icon 3" />
                  <h4 className="text-color-white" >Video Creation</h4>
                  <h6 className="text-color-white">3+ Years Experience</h6>
                </div>
              </div>
                <div className="col">
                  <div className="grey-box">
                   <img className="icons" src={IconFour} alt="Icon 4" />
                  <h4 className="text-color-white" >3D Animation</h4>
                  <h6 className="text-color-white">3+ Years Experience</h6>
                  </div>
                </div>
              </div>
            </div>
                </div>
            </div>
          </div>
          <div className="blockWhite">
      <div className=" container padding-top-150 ">
        <div className="row">
          <div className="col center padding-bottom-150">
          <img className="" src={Gdesign} alt="Design Skills" />
          </div>
          <div className="col">
            <h1> WHAT I'M GOOD AT</h1>
            <h4> GRAPHIC DESIGN</h4>
            <p>Here is a list of my most frequently used design skillsets along with a self assessment of my expertise in each.</p>
            <img className="Goodat" src={GSkills} alt="Design Skills" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row padding-left-60">
          <div className="col">
            <h1> WHAT I'M GOOD AT</h1>
            <h4> WEB DEVELOPMENT</h4>
            <p>Here is a list of my most frequently used design skillsets along with a self assessment of my expertise in each.</p>
            <img className="Goodat" src={WSkills} alt="Web Skills" />
          </div>
          <div className="center col ">
          <img className="" src={Wdesign} alt="Web Skills" />
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}

export default Section;
