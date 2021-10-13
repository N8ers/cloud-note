import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./Notes.css";

import NoteList from "../NoteList/NoteList.js";
import NotePad from "../NotePad/NotePad.js";

function Notes() {
  const { id } = useParams();
  const { notes, selectedNoteId } = useSelector((state) => state.notes);

  const selectedNote = () => {
    if (!notes.length) {
      return;
    }

    if (!selectedNoteId) {
      // refactor default to be latest timestamp when we add that.
      let notesCopy = [...notes];
      let notesSortedById = notesCopy.sort((a, b) => a.id - b.id);
      return notesSortedById[0];
    }

    let filteredNotes = notes.filter((note) => note.id === selectedNoteId);
    if (filteredNotes.length) {
      return filteredNotes[0];
    }
  };

  return (
    <div className="notes-container">
      <NoteList className="notes-list" notes={notes} />
      <NotePad className="note-pad" selectedNote={selectedNote()} />
      <div>
        <h1>ID: {id ? id : "No ID"}</h1>
      </div>
    </div>
  );
}

export default Notes;
