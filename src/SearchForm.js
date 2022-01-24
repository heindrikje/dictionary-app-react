import React, { useState } from "react";
import axios from "axios";
import ApiResults from "./ApiResults";
import "./SearchForm.css";

export default function SearchForm() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }
  return (
    <div className="SearchForm">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={updateWord}
          autoFocus={true}
        />
      </form>
      <i className="bi bi-search"></i>
      <ApiResults data={results} />
    </div>
  );
}

// Hintergrundbild von Büchern/Wörtern
// für die einzelnen Sachen eigene [weiße] Dinger?
// Oder Hintergrund mit Farbverlauf; einzelne Dinger mit gleichem, aber dann mit Box shadow, sodass sie "hervorstehen"
// statt react Zeichen im Tab ein Buch Icon
// coole Schriftarten
// cooler Header
// Dictionary evtl auch als Header mit mehreren Büchern im Hintergrund
// hr zwischen den Sachen (oder auch nur nach search engine)
// cooles Bild oder Icon über Dictionary App
// Synonyme in kleinen platten "Kreisen" (Art buttons)
// Anhörding (Icon/Play-Button) und Lautschrift in einem Button-Ding?
// an den Seiten Bilder von Bibliothek/Wörtern?
