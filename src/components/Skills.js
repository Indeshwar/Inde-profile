import React from "react";
import { useSelector } from "react-redux";
import Card from "./UI/Card";
import "./style.css";
function Skills() {
  const skills = useSelector((state) => state.show.skills);

  const skillList = (
    <div className="container-fluid">
      <ul className="row ul">
        {skills.map((s) => (
          <li key={s.id} className="col-lg-5 col-md-5 col-sm-12 main-content">
            <h2>{s.title}</h2>
            <div>
              {s.name.map((n) => (
                <li className="li">{n}</li>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return <Card>
    <h1 className="title">Skills</h1>
    {skillList}
    </Card>;
}

export default Skills;
