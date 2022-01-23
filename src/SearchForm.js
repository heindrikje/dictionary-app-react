import React, { useState } from "react";
import "./SearchForm.css";

export default function SearchForm() {
  const [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${word}`);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }
  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit} className="flexContainer">
        <input
          type="search"
          placeholder="What word are you looking for?"
          className="form-control"
          autoFocus="on"
          onChange={updateWord}
        />
      </form>
      <i class="bi bi-search"></i>
    </div>
  );
}

// Hintergrundbild von Büchern/Wörtern
// für die einzelnen Sachen eigene [weiße] Dinger?
// Oder Hintergrund mit Farbverlauf; einzelne Dinger mit gleichem, aber dann mit Box shadow, sodass sie "hervorstehen"
// statt react Zeichen im Tab, ein Buch Icon
// coole Schriftarten
// cooler Header
// Dictionary evtl auch als Header mit mehreren Büchern im Hintergrund
// br zwischen den Sachen (oder auch nur nach search engine)
// cooles Bild oder Icon über Dictionary App
// Synonyme in kleinen platten "Kreisen" (Art buttons)
// Anhörding (Icon/Play-Button) und Lautschrift in einem Button-Ding?
// an den Seiten Bilder von Bibliothek/Wörtern?
