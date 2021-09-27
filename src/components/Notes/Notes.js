import React from "react";

import "./Notes.css";

import NoteList from "../NoteList/NoteList.js";
import NotePad from "../NotePad/NotePad.js";

function Notes() {
  return (
    <div className="Notes">
      <NoteList />
      <NotePad />
    </div>
  );
}

export default Notes;
