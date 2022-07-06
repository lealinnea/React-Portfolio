import React from 'react';
import '../styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.css';

function Contact() {

  return (
    <main>
      <section className="section">

        <form>
          <h2>Contact Me</h2>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div className="form-group mt-2">
            <label>Message:</label>
            <input className="form-control" id="msg" placeholder="Enter a message" name="msg" />
          </div>
          <button type="submit" className="btn btn-success mt-3">Submit</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;