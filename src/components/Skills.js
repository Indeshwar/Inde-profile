import React from "react";
import "./skills.css";
function Skills() {
  return (
    <>
      <div className="container-fluid content">
        <div className="row">
          <div className="col">
            <h1 className="title">My Skills</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              <h2 className="title"> Programming Language</h2>
              <ul className="ul">
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>

            <div>
              <h2 className="title"> Database</h2>
              <ul className="ul">
                <li>JDBC</li>
                <li>MYSQL</li>
                <li>Postgress</li>
                <li>Mongo DB</li>
              </ul>
            </div>

            <div>
              <h2 className="title"> Front End</h2>
              <ul className="ul">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>ReactJs</li>
              </ul>
            </div>

            <div>
              <h2 className="title"> IDEs</h2>
              <ul className="ul">
                <li>IntelliJ</li>
                <li>Eclipse</li>
              </ul>
            </div>

            <div>
              <h2 className="title"> Cloud Technologies</h2>
              <ul className="ul">
                <li>Google Cloud Platform</li>
                <li>Amazon Web Services</li>
              </ul>
            </div>
          </div>

          <div className="col">
            <div>
              <h2 className="title"> Frameworks</h2>
              <ul className="ul">
                <li>Spring Boot</li>
                <li>Spring Data JPA</li>
                <li>Hibernate</li>
              </ul>
            </div>

            <div>
              <h2 className="title"> Version Control</h2>
              <ul className="ul">
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>

            <div>
              <h2 className="title"> Continous Integration/Deployment</h2>
              <ul className="ul">
                <li>Jenkins</li>
              </ul>
            </div>

            <div>
              <h2 className="title"> Code Quality and Testing</h2>
              <ul className="ul">
                <li>SonarQube</li>
                <li>Junit Test</li>
              </ul>
            </div>

            <div>
              <h2 className="title"> Containerization</h2>
              <ul className="ul">
                <li>Docker</li>
              </ul>
            </div>

            <div>
              <h2 className="title">Orchestration</h2>
              <ul className="ul">
                <li>Kubernetes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
