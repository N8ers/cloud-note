import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetNotesQuery } from "../api/apiSlice";
import { useParams } from "react-router-dom";

import "./Notes.css";

import NoteList from "../NoteList/NoteList.js";
import NotePad from "../NotePad/NotePad.js";

function Notes() {
  const { data: notes, isLoading, isSuccess } = useGetNotesQuery();
  const { id } = useParams();

  const [selectedNote, setSelectedNote] = useState(null);

  function setDisplayedNote() {
    let routeId = parseInt(id);
    if (selectedNote && selectedNote.id !== routeId) {
      let [note] = notes.filter((note) => note.id === routeId);
      setSelectedNote(note);

      console.log("setDisplayedNote! ", routeId, note);
    }
  }

  const changeSelectedNote = (noteId) => {
    let selectedNote = notes.filter((note) => note.id === noteId);
    setSelectedNote(selectedNote);
  };

  let content;
  if (isLoading) {
    content = <h1>hol up...</h1>;
  } else if (isSuccess) {
    if (parseInt(id)) {
      setDisplayedNote();
    }
    content = (
      <div className="notes-container">
        <NoteList
          className="notes-list"
          notes={notes}
          changeSelectedNote={changeSelectedNote}
        />
        <NotePad className="note-pad" note={selectedNote} />
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Notes;
