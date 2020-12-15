import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

export default function App() {
  const emojiDict = {
    "🎅": "santa",
    "❄️": "snow flake",
    "🎁": "gift",
    "🦌": "reindeer",
    "⛄": "snow man",
    "🎄": "cristmas tree"
  };

  const reverseDict = {
    santa: "🎅",
    "snow flake": "❄️",
    gift: "🎁",
    reindeer: "🦌",
    "snow man": "⛄",
    "cristmas tree": "🎄"
  };

  const [meaning, setMeaning] = useState("");
  const [emojiSearch, setEmojiSearch] = useState("");
  const [textSearch, setTextSearch] = useState("");
  const [display, setDisplay] = useState("");
  const [displayEmoji, setDisplayEmoji] = useState("");

  const searchEmoji = () => {
    if (reverseDict[emojiSearch]) {
      setDisplay(reverseDict[emojiSearch]);
    } else {
      setDisplay("Sorry, we don't have a emoji for that");
    }
  };

  const searchText = () => {
    if (emojiDict[textSearch]) {
      setDisplayEmoji(emojiDict[textSearch]);
    } else {
      setDisplayEmoji("Sorry, we don't have this emoji in our database");
    }
  };

  return (
    <div className="App">
      <h1>Christmas Emojis</h1>
      <ul
        style={{
          listStyle: "none"
        }}
      >
        <h3> Select a emoji to see its meaning </h3>
        {Object.keys(emojiDict).map((emoji) => (
          <li
            key={uuidv4()}
            onClick={() => {
              setMeaning(emojiDict[emoji]);
            }}
            style={{
              display: "inline",
              padding: "10px",
              fontSize: "2rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </li>
        ))}
      </ul>
      <p>
        <b>{meaning}</b>
      </p>
      <hr />
      <br />
      <h3> Search emoji by text </h3>
      <input
        type="text"
        value={emojiSearch}
        onChange={(e) => setEmojiSearch(e.target.value)}
      />
      <br />
      <button
        style={{
          padding: "5px 15px",
          margin: "20px"
        }}
        onClick={searchEmoji}
      >
        Search
      </button>
      <span
        style={{
          fontSize:
            display === "Sorry, we don't have a emoji for that"
              ? "1rem"
              : "2rem",
          display: "block"
        }}
      >
        {display}
      </span>
      <hr />
      <br />
      <h3> Search the text for emoji. </h3>
      <input
        type="text"
        placeholder="paste the emoji here"
        value={textSearch}
        onChange={(e) => setTextSearch(e.target.value)}
      />
      <br />
      <button
        style={{
          padding: "5px 15px",
          margin: "20px"
        }}
        onClick={searchText}
      >
        Search
      </button>
      <span
        style={{
          display: "block"
        }}
      >
        {displayEmoji}
      </span>
    </div>
  );
}
