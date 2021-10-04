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
            body={note.body}
            key={"note-" + index}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
