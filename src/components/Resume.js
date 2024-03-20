import React from "react";
import "./style.css";



function Resume() {
  const filePath = '/Users/indeshwarchaudhary/Desktop/react-app/IndeshwarChy.docx';

  const dowloadHandler =()=>{
    fetch(filePath).then((response)=>{
      if(!response.ok){
        throw new Error('Network response was not ok')
      }
      return response.blob();

    }).then((blob)=>{
      //Create a temporaly anchor element to trigger the download
      const anchor = document.createElement('a');
      //Create temporaly downloadable URL
      anchor.href = URL.createObjectURL(blob);
      //Tt sets 'download' attribute of the anchor element, specifying the filename that the downloaded file should have
      anchor.download = 'IndeshwarChy.docx';
      //It trigers a click on the anchor element to initiates the download process.
      anchor.click();
      //it revokes the temporaly URL after download completed to free up resources.
      URL.revokeObjectURL(anchor.href);

    }).catch((error)=>{
      console.log('Error downloading file:', error);
    })
  }

  return (
    <>
      <div className="download-content">
        <h1 className="title">Click here to download resume.</h1>
        <div className="title-content">
          <button onClick={dowloadHandler} className="btn bg-success p-3">
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default Resume;
