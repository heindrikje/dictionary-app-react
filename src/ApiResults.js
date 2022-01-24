import React from "react";

export default function ApiResults(props) {
  console.log(props.results);
  if (props.data) {
    return (
      <div className="ApiResults">
        <h3>{props.data.word}</h3>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              {meaning.definitions.map(function (definition) {
                return <p key="definition.id">{definition.definition}</p>;
              })}
              {meaning.definitions.map(function (definition) {
                return (
                  <p>
                    <em key="example.id">{definition.example}</em>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
