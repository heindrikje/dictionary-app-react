import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="partOfSpeech">{props.meaningData.partOfSpeech}</h3>
      <hr />
      {props.meaningData.definitions.map(function (definition, index) {
        return (
          <div key="index">
            <p className="definition">{definition.definition}</p>
            <div className="example">
              <em>{definition.example}</em>
            </div>
            <Synonyms synonymData={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
