import React from "react";
import exampleImage from "../images/indesh.jpg";
import Card from "./UI/Card";
function About() {
  return (
    <>
      <div className="container-fluid content">
        <div className="row pt-4">
          <div className="col">
            <Card>
            <h1 className="demo">About Me</h1>
            <div className="demo">
              <p>
                Hello! I'm Indeshwar, a passionate software developer with
                expertise in Java, JavaScript, HTML, CSS, React.js, Bootstrap,
                and Spring Boot. With a strong foundation in both front-end and
                back-end technologies, I thrive in creating robust and
                user-friendly web applications. My journey into software
                development began with Java, where I honed my skills in
                object-oriented programming and backend development. I have
                experience in building scalable and efficient applications using
                Java frameworks like Spring Boot, which enables me to develop
                RESTful APIs and microservices architecture. In the realm of
                front-end development, I specialize in JavaScript, HTML, and
                CSS. I enjoy crafting interactive and responsive user interfaces
                using modern web technologies. With React.js and Bootstrap, I
                bring designs to life, ensuring a seamless user experience
                across different devices and screen sizes.
              </p>
            </div>
            <div className="demo">
              <p>
                I am excited about the opportunity to work on impactful projects
                and contribute to the advancement of technology. Feel free to
                reach out to me to discuss potential collaborations, projects,
                or simply to connect and share insights about software
                development and technology. Let's build something amazing
                together!
              </p>
            </div>
            </Card>
          </div>
         
          <div className="col">
            <h2>Indeshwar Chaudhary</h2>
            <img src={exampleImage} alt="Example" className="frame" />
          </div>
        </div>
      </div>
    </>

  );
}

export default About;
