import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./ApiResults.css";
import imgTypewriter from "./imgTypewriter.jpg";

export default function ApiResults(props) {
  if (props.data) {
    return (
      <div className="ApiResults">
        <h3 className="keyword">{props.data.word}</h3>

        <Phonetics phoneticsData={props.data.phonetics} />

        {props.data.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaningData={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return <img src={imgTypewriter} alt="typewriter" />;
  }
}
