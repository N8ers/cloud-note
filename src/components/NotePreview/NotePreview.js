import React from "react";

import "./NotePreview.css";

function NotePreview(props) {
  function truncateText(text) {
    return text.substring(0, 36) + "...";
  }

  return (
    <div className="NotePreview">
      <h1>{props.title}</h1>
      <p>{truncateText(props.body)}</p>
    </div>
  );
}

export default NotePreview;
