import React, { useState } from "react";
import { useGetNotesQuery } from "../api/apiSlice";
import { useParams } from "react-router-dom";

import "./Notes.css";

import NoteList from "../NoteList/NoteList.js";
import NotePad from "../NotePad/NotePad.js";

function Notes() {
  const { data: notes, isLoading, isSuccess, isError } = useGetNotesQuery();
  const { id } = useParams();

  const [selectedNote, setSelectedNote] = useState(null);

  function setDisplayedNote() {
    let routeId = parseInt(id);
    if (!selectedNote || selectedNote.id !== routeId) {
      let [note] = notes.filter((note) => note.id === routeId);
      setSelectedNote(note);
    }
  }

  const changeSelectedNote = (noteId) => {
    let selectedNote = notes.filter((note) => note.id === noteId);
    setSelectedNote(selectedNote);
  };

  const handleNewNote = () => {
    // set url to 'new'
    // update state to have new empty note
    // force to go to new note
  };

  let content;
  if (isLoading) {
    content = <h1>hol up...</h1>;
  } else if (isError) {
    content = <h1>ERROR LOADING, check if API server is running</h1>;
  } else if (isSuccess) {
    if (id) {
      setDisplayedNote();
    }
    content = (
      <div className="notes-container">
        <NoteList
          className="notes-list"
          notes={notes}
          changeSelectedNote={changeSelectedNote}
          handleNewNote={handleNewNote}
        />
        <NotePad className="note-pad" note={selectedNote} />
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Notes;
