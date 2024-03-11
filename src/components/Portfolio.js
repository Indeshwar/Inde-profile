import React from "react";
import { useSelector } from "react-redux";
import Card from "./UI/Card";
import './style.css';
const Portfolio = () => {
  const projects = useSelector((state) => state.show.projects);

  const p = <ul>
    {projects.map(p=><li key={p.id} className="main-content">
      <h2>{p.title}</h2>
      <div>
        <span>{p.description}</span>
      </div>
    </li>) }
  </ul>;
  return (
    <>
      <>
        {p}
      </>
    </>
  );
};

export default Portfolio;
