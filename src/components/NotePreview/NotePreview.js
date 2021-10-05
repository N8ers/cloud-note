import React from "react";

import "./NotePreview.css";

import { useDispatch } from "react-redux";

import { updateSelectedNoteId } from "../Notes/notesSlice";

function NotePreview(props) {
  const dispatch = useDispatch();

  function truncateText(text) {
    return text.substring(0, 36) + "...";
  }

  function newNoteSelected() {
    dispatch(updateSelectedNoteId(props.id));
  }

  return (
    <div className="NotePreview" onClick={newNoteSelected}>
      <div>{props.title}</div>
      <p>{truncateText(props.body)}</p>
    </div>
  );
}

export default NotePreview;
