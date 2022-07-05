import React from "react";
import "../styles/Styles.css";
import "../styles/Portfolio.css";
import CodeQ from "../img/CodeQ.png";
import WorkDaySch from "../img/Work Day Sch.png";
import NoteTaker from "../img/Notetaker.png";
import Ecom from "../img/E-Commerce.png";
import MyTeam from "../img/My Team Dashboard.png";
import PandP from "../img/Patters and Pantries.png";
import Dately from "../img/Dately.png";

function Section() {
  return (
    <main>
         <div className="blockWhite">
      <section>
        <h1>Web Development</h1>
        <p>
          Web Development has always been a passion of mine. I have recently been going to school at Northwestern
          University learning about UI/UX design. Click the link below to check out a few if my get hub repo portfolio
          pieces. Attached to each repo is a readme decribing each project in more detail.
        </p>
        <a href="https://github.com/lealinnea?tab=repositories"><button className="button">View Git Hub Repos</button> </a>
      </section>
        </div>

      <div className="blockTwo">
      <div className="center  padding-tb-60 bgc-tan-transparent">
        <h2>Portfolio</h2>
        <div className="flex-container-2 ">
          <section className="padding-20">
          <img className="zoom" src={WorkDaySch} alt="Work Day Sch" />
              <h6 className="padding-20">WORK DAY SCHEDULER APP</h6>
              <p className="text-align-left">The purpose of the daily planner is to learn about JQuery and Bootstrap.</p>
              <a href="https://github.com/lealinnea/Work-Day-Scheduler"><button className="white-button">Link to GitHub</button>
              </a>
            </section>
            <section className="padding-20">
            <img className="zoom" src={CodeQ} alt="CodeQ" />
                <h6 className="padding-20">CODE QUIZ APP</h6>
                <p className="text-align-left">This application is working code game that filters through questions and decreases time when answered incorrectly. When quiz ends you add you name and your score appears.</p>
                <a href="https://github.com/lealinnea/Code-Quiz"><button className="white-button">Link to GitHub</button>
                </a>
              </section>
              <section className="padding-20">
              <img className="zoom" src={Dately} alt="Dately" />
                  <h6 className="padding-20">DATELY APP</h6>
                  <p className="text-align-left">Dately is a web application that provides local event and restaurant information. Data is retrieved based on a date and a Chicago neighborhood location, which is provided by the user. After searching, a user can "like" events and restaurants and save to a "bucket list" for future reference.</p>
                  <a href="https://github.com/lealinnea/Dately"><button className="white-button">Link to GitHub</button> </a>
              </section>
          <section className="padding-20">
          <img className="zoom" src={NoteTaker} alt="Note Taker App" />
              <h6 className="padding-20">NOTE TAKER APP</h6>
              <p className="text-align-left">Modify starter code to create an application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.</p>
              <a href="https://github.com/lealinnea/Note-Taker-Express-JS"><button className="white-button">Link to GitHub</button>
              </a>
            </section>
            <section className="padding-20">
              <img className="zoom" src={MyTeam} alt="My Team Dashboard" />
                <h6 className="padding-20">TEAM DASHBOARD APP</h6>
                <p className="text-align-left">COMING SOON!</p>
                <a href=""><button className="white-button">COMING SOON</button>
                </a>
              </section>
              <section className="padding-20">
              <img className="zoom" src={Ecom} alt="E-Commerce" />
                  <h6 className="padding-20">E-COMMERCE BACKEND</h6>
                  <p className="text-align-left">Using Express.js API to use Sequelize to interact with a MySQL database. Updating the back end with different inputs to modify data.
                  </p>
                  <a href="https://github.com/lealinnea/E-Commerce-for-Client"><button className="white-button">Link to GitHub</button>
                  </a>
                </section>
              <section className="padding-20">
              <img className="zoom" src={PandP} alt="Patters and Pantries" />
                  <h6 className="padding-20">PLATTERS AND PANTRIES APP</h6>
                  <p className="text-align-left">An application that lets you stock a personalized pantry, search recipes, and automatically generate a grocery list of missing ingredients.</p>
                <a href="https://github.com/Pleasant-Pantry-Professionals/Platters-and-Pantries"><button className="white-button">Link to GitHub</button>
                </a>
              </section>
        </div>
      </div>
      </div>
  
    </main>
  );
}

export default Section;
