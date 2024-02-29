import React from "react";
import exampleImage from '../images/indesh.jpg'
function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="demo">Hello!! I am Indeshwar Chaudhary</h1>
            <div className="demo">
              <p>
                I am Sofware develper. I hav 5 years of experience in Sofware
                field
              </p>
              <p>
                I am Sofware develper. I hav 5 years of experience in Sofware
                field
              </p>
              <p>
                I am Sofware develper. I hav 5 years of experience in Sofware
                field
              </p>
              <p>
                I am Sofware develper. I hav 5 years of experience in Sofware
                field
              </p>
              <p>
                I am Sofware develper. I hav 5 years of experience in Sofware
                field
              </p>
            </div>
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

export default Home;
