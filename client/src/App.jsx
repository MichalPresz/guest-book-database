import React from "react";
import { useState, useEffect } from "react";
import SongsForm from "./assets/SongsForm.jsx";

export default function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, []);
  async function getSongs() {
    const response = await fetch("http://localhost:8080/songs");
    const data = await response.json();
    setSongs(data);
  }

  return (
    <div>
      <h1>Listen!</h1>
      {songs.map((song) => {
        return (
          <div key={song.id}>
            <h2>
              {song.title} who is {song.year}
            </h2>
            <p>{song.title} is playing now:</p>
            <ul>
              {song.author.map((author) => {
                return <li key={author}>{author}</li>;
              })}
            </ul>
          </div>
        );
      })}
      <SongsForm />
    </div>
  );
}
