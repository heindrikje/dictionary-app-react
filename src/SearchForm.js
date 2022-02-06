import React, { useState } from "react";
import axios from "axios";
import ApiResults from "./ApiResults";
import Pictures from "./Pictures";
import "./SearchForm.css";
import imgTypewriter from "./imgTypewriter.jpg";

export default function SearchForm() {
  const [keyWord, setKeyWord] = useState("");
  const [results, setResults] = useState(null);
  const [pictures, setPictures] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPictures(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(dictionaryApiUrl).then(handleResponse);
    const pexelsApiKey =
      "563492ad6f917000010000011335da953170479b997e25123744707f";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=3`;
    let headers = { Authentication: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Pictures data={pictures} />
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
