import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phoneticsData.map(function (phonetic, index) {
        return (
          <div key={index}>
            <a
              href={phonetic.audio}
              target="_blank"
              rel="noreferrer"
              className="audio"
            >
              Listen
            </a>
            <div className="phoneticText">/{phonetic.text}/</div>
          </div>
        );
      })}
    </div>
  );
}

// icon für audio nutzen, dann onClick event
// mit HTML5 audio api oder react audio player
