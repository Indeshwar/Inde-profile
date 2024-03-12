import React from "react";
import Card from "./UI/Card";
import contact from "../images/contact.jpeg";
import email from "../images/email.webp";
import "./style.css";
function Contact() {
  return (
    <Card>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12 m-auto">
            <h1 className="title">Contact Me !</h1>
            <div>
              <ul className="title-content">
                <li>
                  <img
                    src={contact}
                    alt="contanct"
                    className="social-media-frame"
                  />
                  312-522-5914
                </li>
                <li>
                  <img src={email} alt="email" className="social-media-frame" />
                  indeshwar.csdeveloper@gmail.com
                </li>
              </ul>
            </div>

            <div>
              <p>
                Interested in collaborating on a project or discussing new
                opportunities? Reach out via the contact or connect with me on
                social media platforms. I'm always open to new challenges and
                eager to connect with fellow professionals in the tech
                community.
              </p>
            </div>
            <div>
              <p>
                Thank you for visiting my website. I hope you enjoy exploring my
                work, learning more about my skills and experiences, and joining
                me on this journey through the exciting world of software
                engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Contact;
