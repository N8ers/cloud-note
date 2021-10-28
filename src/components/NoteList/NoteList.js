import React from "react";

import "./NoteList.css";
import NotePreview from "../NotePreview/NotePreview.js";

function NoteList(props) {
  return (
    <div className="NoteList">
      {props.notes.map((note, index) => {
        return (
          <NotePreview
            id={note.id}
            title={note.title}
            note={note.note}
            key={"note-" + index}
            changeSelectedNote={props.changeSelectedNote}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
