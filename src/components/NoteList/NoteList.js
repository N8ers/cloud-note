import React from "react";

import "./NoteList.css";
import NotePreview from "../NotePreview/NotePreview.js";

function NoteList() {
  return (
    <div className="NoteList">
      <NotePreview />
      <NotePreview />
      <NotePreview />
      <NotePreview />
    </div>
  );
}

export default NoteList;
