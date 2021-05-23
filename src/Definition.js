import React from "react";
import "./Definition.css";
// import Synonyms from "./Synonyms";

export default function Definition(props) {
    console.log(props.meaning);
    return (
    <div className="Definition">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong> Definition:</strong>
              <br />
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
            {/* <Synonyms synonyms={definition.synonyms} /> */}
          </div>
        );
      })}
    </div>
  );
}