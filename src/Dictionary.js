import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Images from "./Images";

export default function Dictionary(props) {
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleResponse(response) {
  setResults(response.data[0]) ;
}

function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
}

function search() {
  // documentation: https://dictionaryapi.dev/e
  let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  let pexelsApiKey =
      "563492ad6f91700001000001def525fb56ec4a9d83e5b2487ec74dee";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
}

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
  <div className="dictionary">
    <div className="search-form">
      <form onSubmit={handleSubmit} className="input-group mb-1 col-12">
        <input type="search" className="form-control" placeholder="Enter a word..." onChange={handleKeywordChange}/>
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            <i className="fas fa-search"></i> Search
          </button>
        </form>
        <small>Suggested words: sunrise, wine, holiday, gold</small>
      </div>
    <Results results={results} />
    <Images photos={photos} />
  </div>
  )
  } else {
      load();
      return "Loading...";
  }
}