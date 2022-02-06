import React, { useState } from "react";
import axios from "axios";
import ApiResults from "./ApiResults";
import "./SearchForm.css";
import imgTypewriter from "./imgTypewriter.jpg";

export default function SearchForm() {
  const [keyWord, setKeyWord] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyWord(event) {
    setKeyWord(event.target.value);
  }

  let form = (
    <div>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={updateKeyWord}
          autoFocus={true}
        />
        <i className="bi bi-search"></i>
      </form>
    </div>
  );

  if (results) {
    return (
      <div className="SearchForm">
        {form}
        <ApiResults data={results} />
      </div>
    );
  } else {
    return (
      <div className="SearchForm">
        {form}
        <div className="typewriter">
          <img src={imgTypewriter} alt="typewriter" />
        </div>
        <div className="userTyping">{keyWord}</div>
      </div>
    );
  }
}
