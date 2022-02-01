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
              <i className="bi bi-headphones"></i>
            </a>
            <span className="phoneticText">/{phonetic.text}/</span>
          </div>
        );
      })}
    </div>
  );
}
