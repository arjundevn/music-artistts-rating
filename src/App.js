import React, { useState } from "react";
import "./styles.css";

var heading = "Ratings of music artists 🎸";
var genres = ["Rock", "EDM", "Bollywood"];

var rock = {
  Aerosmith: "3.8/5",
  "Linkin Park": "5/5",
  "Pink Floyd": "4/5"
};

var rockArray = Object.keys(rock);

var edm = {
  Hardwell: "4/5",
  "Above & Beyond": "5/5",
  "Nora En Pure": "3/5"
};

var edmArray = Object.keys(edm);

var bollywood = {
  "Arijit Singh": "4/5",
  KK: "5/5",
  "Aatif Aslam": "5/5"
};

var bollywoodArray = Object.keys(bollywood);

export default function App() {
  var [result1, setResult1] = useState("");
  var [result2, setResult2] = useState("");
  var [result3, setResult3] = useState("");

  function genreSelect(genre) {
    if (genre.toLowerCase() === "rock") {
      setResult1(rockArray[0] + ": " + rock[rockArray[0]]);
      setResult2(rockArray[1] + ": " + rock[rockArray[1]]);
      setResult3(rockArray[2] + ": " + rock[rockArray[2]]);
    } else if (genre.toLowerCase() === "edm") {
      setResult1(edmArray[0] + ": " + edm[edmArray[0]]);
      setResult2(edmArray[1] + ": " + edm[edmArray[1]]);
      setResult3(edmArray[2] + ": " + edm[edmArray[2]]);
    } else if (genre.toLowerCase() === "bollywood") {
      setResult1(bollywoodArray[0] + ": " + bollywood[bollywoodArray[0]]);
      setResult2(bollywoodArray[1] + ": " + bollywood[bollywoodArray[1]]);
      setResult3(bollywoodArray[2] + ": " + bollywood[bollywoodArray[2]]);
    }
  }
  return (
    <div className="App">
      <h1>{heading}</h1>

      <h2>
        This is my ratings of some artists in their respective genres of music:
      </h2>

      {genres.map((genre) => {
        return <button onClick={() => genreSelect(genre)}>{genre}</button>;
      })}
      <div class="res">
        <p>{result1}</p>
        <p>{result2}</p>
        <p>{result3}</p>
      </div>
    </div>
  );
}
