import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);

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

  function load() {
    setLoaded(true);
    search()
  }

  if(loaded) {
  return (
  <div className="dictionary search-form">
    <form onSubmit={handleSubmit} className="input-group mb-4 col-12">
      <input type="search" className="form-control" placeholder="Enter a word..." onChange={handleKeywordChange}/>
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          <i className="fas fa-search"></i> Search
        </button>
      </form>
    <Results results={results} />
  </div>
  )
  } else {
      load();
      return null
  }
}