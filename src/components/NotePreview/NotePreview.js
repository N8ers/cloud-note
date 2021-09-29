import React from "react";

import "./NotePreview.css";

function NotePreview(props) {
  return (
    <div className="NotePreview">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
}

export default NotePreview;
