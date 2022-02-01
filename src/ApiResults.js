import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./ApiResults.css";
import undrawBooks from "./undrawBooks.svg";

export default function ApiResults(props) {
  function showHomepage(event) {
    alert("Cool");
  }

  if (props.data) {
    return (
      <div className="ApiResults">
        <section>
          <img
            src={undrawBooks}
            alt="books"
            onclick="window.history.go(-1); return false;"
          />
          <h2 className="keyword">{props.data.word}</h2>
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

// Auf dem Bild die beiden Pfeile zu unsichtbaren Links machen
// die dann auf die Startseite verlinken
// onClick event auf Bild?
