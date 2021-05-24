import React from "react";
import "./Results.css";
import Definition from "./Definition";
import Phonetics from "./Phonetics";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
    <div className="Results">
      <h2>{props.results.word}</h2>
      {props.results.phonetics.map(function (phonetic, index) {
        return (
        <div key={index}>
            <Phonetics phonetic={phonetic} />
        </div>
        );
      })}
      {props.results.meanings.map(function (meaning, index) {
        return (
        <div key={index}>
            <Definition meaning={meaning} />
        </div>
        );
      })}
    </div>
    );
  } else {
    return null;
  }
}