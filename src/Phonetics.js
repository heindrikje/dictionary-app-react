import React from "react";
import "./Phonetics.css";

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
              <i class="bi bi-headphones"></i>
            </a>
            <span className="phoneticText">/{phonetic.text}/</span>
          </div>
        );
      })}
    </div>
  );
}

// icon für audio nutzen, dann onClick event
// mit HTML5 audio api oder react audio player
