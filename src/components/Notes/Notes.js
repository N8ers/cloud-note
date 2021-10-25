import React from "react";
import { useSelector } from "react-redux";
import { useGetNotesQuery } from "../api/apiSlice";
import { useParams } from "react-router-dom";

import "./Notes.css";

import NoteList from "../NoteList/NoteList.js";
import NotePad from "../NotePad/NotePad.js";

function Notes() {
  // const { notes } = useSelector((state) => state.notes);
  const { data: notes, isLoading, isSuccess } = useGetNotesQuery();
  const { id } = useParams();
  let routeId = parseInt(id);
  let selectedNote = () => {
    if (routeId) {
      let [note] = notes.filter((note) => note.id === routeId);
      return JSON.stringify(note);
    }
    return null;
  };

  let content;
  if (isLoading) {
    content = <h1>hol up...</h1>;
  } else if (isSuccess) {
    content = (
      <div className="notes-container">
        <NoteList className="notes-list" notes={notes} />
        <NotePad className="note-pad" note={selectedNote()} />
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Notes;
