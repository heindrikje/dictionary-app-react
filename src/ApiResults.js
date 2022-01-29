import React from "react";
import Meaning from "./Meaning";
import "./ApiResults.css";

export default function ApiResults(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="ApiResults">
        <h3 className="keyword">{props.data.word}</h3>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaningData={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
