import React from "react";

export default function Synonyms(props) {
  if (props.synonymData) {
    return (
      <ul className="Synonyms">
        {props.synonymData.map(function (synonyms, index) {
          return <li key={index}>{synonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
