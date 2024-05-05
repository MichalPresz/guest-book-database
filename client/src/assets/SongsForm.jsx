import React from "react";
import { useState } from "react";

export default function ContestantForm() {
  const [form, setForm] = useState({ title: "", year: 0 });

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8080/songs", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.title]: event.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new song</h3>
      <p>Your favourite song</p>
      <input name="song" placeholder="year" onChange={handleChange} />
      <input
        name="title"
        type="text"
        placeholder="Song"
        onChange={handleChange}
      />
      <button>Add Song</button>
    </form>
  );
}
