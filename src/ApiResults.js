import React from "react";

export default function ApiResults(props) {
  console.log(props.data);
  let word = function mapResults() {
    props.data.map(function (word, index) {
      return <div key={index}>{word}</div>;
    });
  };
  if (props.data) {
    return (
      <div className="ApiResults">
        <h3>{word.word}</h3>
        {word.meanings.map(function (meaning, index) {
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
