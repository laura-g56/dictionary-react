import React from "react";
import "./Results.css";
import Definition from "./Definition";

export default function Results (props) {
  console.log(props.results);

  if (props.results) {
    return (
    <div className="Results">
      <h2>{props.results.word}</h2>
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