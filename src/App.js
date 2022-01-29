import React from "react";
import SearchForm from "./SearchForm";
import "./App.css";
import imgBookshelf from "./imgBookshelf.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary</header>
        <div className="row">
          <div className="col-1 bookshelf-left">
            <img src={imgBookshelf} alt="bookshelf" />
          </div>
          <div className="col-10">
            <SearchForm />
          </div>
          <div className="col-1 bookshelf-right">
            <img src={imgBookshelf} alt="bookshelf" />
          </div>
        </div>
        <hr />
        <footer>
          <a
            href="https://github.com/heindrikje/dictionary-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Heindrikje Kuhs
        </footer>
      </div>
    </div>
  );
}
