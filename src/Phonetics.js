import React from "react";
import "./Phonetics.css";

export default function Phonetics({ phonetic }) {
  const audio = new Audio(phonetic.audio);
  const playSound = (audioFile) => {
    audioFile.play();
  };

  return (
    <div className="Phonetics">
      <button
        className="btn btn-outline-dark
"
        onClick={() => playSound(audio)}
      >
        <i className="fas fa-volume-up sound-icon"></i> {phonetic.text}
      </button>
    </div>
  );
}

