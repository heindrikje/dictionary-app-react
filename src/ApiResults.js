import React from "react";

export default function ApiResults(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="ApiResults">
        <h3 className="keyword">{props.data.word}</h3>
        {props.data.meanings.map(function (meaning) {
          return (
            <div>
              <h4
                key={Math.random().toString(36).substr(2, 9)}
                className="partOfSpeech"
              >
                {meaning.partOfSpeech}
              </h4>
              <div className="definition">
                {meaning.definitions.map(function (definition) {
                  return (
                    <p key={Math.random().toString(36).substr(2, 9)}>
                      {definition.definition}
                    </p>
                  );
                })}
              </div>
              <div className="example">
                {meaning.definitions.map(function (definition) {
                  return (
                    <p>
                      <em key={Math.random().toString(36).substr(2, 9)}>
                        {definition.example}
                      </em>
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
