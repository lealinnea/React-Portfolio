import React from 'react';
import '../styles/Resume.css';
import '../styles/Styles.css';
import resume from "../ResumeLG.pdf"

function Section() {

  return (
    <main>
      <section className="blockWhite">
        <h2>Resume</h2> <br></br>
      </section>
      <section className="blockWhite">
        <a href={resume} download="ResumeLG" target='_blank' rel='noreferrer'>
          <button className='button center'>Download My Resume</button>
        </a>
      </section>
      <section className='center blockWhite'>
        <p>
          HTML <br></br>
          CSS<br></br>
          Javascript<br></br>
          Node <br></br>
          Javascript<br></br>
          MERN Stack<br></br>
          MySQL<br></br>
          Sequelize<br></br>
          NoSQL <br></br>
          MongoDB<br></br>
          Mongoose<br></br>
        </p>
      </section>
    </main>
  );
}

export default Section;