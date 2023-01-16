import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Action: [
    { name: "Attack on Titan", rating: "4.5/5" },
    { name: "Demon Slayer", rating: "3.5/5" },
    { name: "Jujutsu Kaisen", rating: "3/5" },
  ],

  Great_Plot: [
    {
      name: "One Piece",
      rating: "5/5",
    },
    {
      name: "Gintama",
      rating: "4.5/5",
    },
    {
      name: "Hunter x Hunter",
      rating: "4/5",
    },
  ],
  Sci_Fi: [
    {
      name: "Steins Gate",
      rating: "5/5",
    },
    {
      name: "Dr. Stone",
      rating: "4.5/5",
    },
    {
      name: "FMAB",
      rating: "4/5",
    },
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Sci_Fi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        <u style={{ color: "blue" }}> Anime Recommendation App by Manthan </u>
      </h1>
      <p>
        {" "}
        => These are some of my Favourite <b>ANIME</b>. Get the recommendation
        according to the Genre.{" "}
        <b> Click on the Genre to see the Recommendations :- </b> :-{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left", backgroundColor: "blue" }}>
        <ul style={{ paddingInlineStart: "0", color: "darkred" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                fontWeight: "bolder",
                listStyle: "number",
                padding: "1rem",
                border: "3px solid blue",
                backgroundColor: "lightblue",
                width: "50%",
                margin: "1rem 0rem",
                borderRadius: "1rem",
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "large" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
