import React from "react";
import { useSelector } from "react-redux";

import "./Notes.css";

import NoteList from "../NoteList/NoteList.js";
import NotePad from "../NotePad/NotePad.js";

function Notes() {
  const { notes, selectedNoteId } = useSelector((state) => state.notes);

  const selectedNote = () => {
    let filteredNotes = notes.filter((note) => note.id === selectedNoteId);
    if (filteredNotes.length) {
      return filteredNotes[0];
    }
  };

  return (
    <div className="notes-container">
      <NoteList className="notes-list" notes={notes} />
      <NotePad className="note-pad" selectedNote={selectedNote()} />
    </div>
  );
}

export default Notes;
