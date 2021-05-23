import React from "react";
import "./Footer";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="App-footer">
        <small>
          Coded by Laura Gumienik |{" "}
          <a
            className="github-ref"
            href="https://github.com/laura-g56/dictionary-react"
            target="_blank norefferer"
          >
            GitHub 
          </a>
          {" "}|{" "}
          <a
            className="github-ref"
            href="https://vigilant-euclid-7e8c05.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </small>
    </div>
  );
}
