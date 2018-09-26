import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imgUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute m2">
        <img id="inputimage" src={imgUrl} alt="" width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
