import React from "react";
import { Link } from "react-router-dom";

import "./NoteList.css";
import NotePreview from "../NotePreview/NotePreview.js";

function NoteList(props) {
  const handleSelectedNoteChange = (noteId) => {
    props.changeSelectedNote(noteId);
  };

  return (
    <div className="NoteList">
      <Link to={`/new`} className="link-container">
        <div className="newNote">+ New Note</div>
      </Link>

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
