import React from "react";

import "./NoteList.css";
import NotePreview from "../NotePreview/NotePreview.js";

function NoteList(props) {
  const handleSelectedNoteChange = (noteId) => {
    props.changeSelectedNote(noteId);
  };

  const handleNewNote = () => {
    props.addNewNote();
  };

  return (
    <div className="NoteList">
      <div onClick={handleNewNote} className="newNote">
        + New Note
      </div>
      {props.notes.map((note, index) => {
        return (
          <NotePreview
            id={note.id}
            title={note.title}
            note={note.note}
            key={"note-" + index}
            changeSelectedNote={handleSelectedNoteChange}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
