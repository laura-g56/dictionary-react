import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);

function handleResponse(response) {
  setResults(response.data[0]) ;
}

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
function search() {
  // documentation: https://dictionaryapi.dev/e
  let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
  axios.get(apiUrl).then(handleResponse);
}

  function handleKeywordChange(event) {
  setKeyword(event.target.value);
  }

  return (
  <div className="dictionary">
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a word..." onChange={handleKeywordChange}/>
    </form>
    <Results results={results} />
  </div>
  )
}