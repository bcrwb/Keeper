import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    setNotes((prev) => {
      return [...prev, note];
    });
  };

  const deleteNote = (id) => {
    setNotes((prev) => {
      return prev.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={uuidv4()}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
            id={index}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
