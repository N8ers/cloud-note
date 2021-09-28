import React from "react";

import "./Notes.css";

import NoteList from "../NoteList/NoteList.js";
import NotePad from "../NotePad/NotePad.js";

function Notes() {
  return (
    <div className="notes-container">
      <NoteList className="notes-list" />
      <NotePad className="note-pad" />
    </div>
  );
}

export default Notes;
