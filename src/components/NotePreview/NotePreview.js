import React from "react";

import "./NotePreview.css";

function NotePreview(props) {
  function truncateText(text) {
    return text.substring(0, 36) + "...";
  }

  function newNoteSelected() {
    // this should probably change a state value somewhere
    console.log(`id ${props.id} was selected`);
  }

  return (
    <div className="NotePreview" onClick={newNoteSelected}>
      <div>{props.title}</div>
      <p>{truncateText(props.body)}</p>
    </div>
  );
}

export default NotePreview;
