import React from "react";
import { useSelector } from "react-redux";
import Card from "./UI/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tabs";
import "./style.css";
import github from "../images/github.png";
const Portfolio = () => {
  const projects = useSelector((state) => state.show.projects);

  const p = (
    <div className="container-fluid">
      <ul className="row ul">
        {projects.map((p) => (
          <li key={p.id} className="col-lg-11 col-sm-12 main-content li">
            <h2 className="title">{p.title}</h2>
            <div>
              <p>{p.description}</p>
            </div>
            <div>
              <div className="row">
                <div className="col-lg-10 col-md-12">
                  <ul>
                    {p.technologies.map((t)=> (<li className="content">{t}</li>) )}
                  </ul>
                 
                </div>
                <div className="col-lg-2">
                  <h2>GitHub</h2>
                  <a
                    href={p.link}
                    className="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2 content"
                  >
                    <img
                      className="social-media-frame"
                      src={github}
                      alt="github"
                    />
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <Card>{p}</Card>
    </>
  );
};

export default Portfolio;
