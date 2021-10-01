import React from "react";

import "./NoteList.css";
import NotePreview from "../NotePreview/NotePreview.js";

function NoteList() {
  const notes = [
    {
      title: "note 1",
      body: "I am a note body that gets truncated, or at least hopefully!",
    },
    {
      title: "note 2",
      body: "I am a note body that gets truncated, or at least hopefully!",
    },
    {
      title: "note 3",
      body: "I am a note body that gets truncated, or at least hopefully!",
    },
  ];

  return (
    <div className="NoteList">
      {notes.map((note, index) => {
        return (
          <NotePreview
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
