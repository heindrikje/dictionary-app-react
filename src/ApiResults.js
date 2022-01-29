import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./ApiResults.css";

export default function ApiResults(props) {
  if (props.data) {
    return (
      <div className="ApiResults">
        <section>
          <h3 className="keyword">{props.data.word}</h3>
          <Phonetics phoneticsData={props.data.phonetics} />
        </section>
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
    return null;
  }
}
