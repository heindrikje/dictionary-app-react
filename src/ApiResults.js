import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./ApiResults.css";
import undrawBooks from "./undrawBooks.svg";

export default function ApiResults(props) {
  if (props.data) {
    return (
      <div className="ApiResults">
        <section>
          <img src={undrawBooks} alt="books" />
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
