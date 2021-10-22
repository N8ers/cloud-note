import React from "react";
import { useSelector } from "react-redux";
import { useGetNotesQuery } from "../api/apiSlice";

import "./Notes.css";

import NoteList from "../NoteList/NoteList.js";
import NotePad from "../NotePad/NotePad.js";

function Notes() {
  // const { notes } = useSelector((state) => state.notes);
  const { data: notes, isLoading, isSuccess } = useGetNotesQuery();

  let content;
  if (isLoading) {
    content = <h1>hol up...</h1>;
  } else if (isSuccess) {
    content = (
      <div className="notes-container">
        <NoteList className="notes-list" notes={notes} />
        <NotePad className="note-pad" />
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Notes;
