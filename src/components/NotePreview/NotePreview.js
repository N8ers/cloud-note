import React, { useState, useEffect } from "react";

import "./NotePreview.css";

import { useDispatch } from "react-redux";

import { updateSelectedNoteId } from "../Notes/notesSlice";

function NotePreview(props) {
  const dispatch = useDispatch();

  const [trucatedText, setTruncatedText] = useState("");
  useEffect(() => {
    let updatedBody = props.body;
    if (props.body.length > 36) {
      updatedBody = props.body.substring(0, 36) + "...";
    }
    setTruncatedText(updatedBody);
  }, [props.body]);

  function newNoteSelected() {
    dispatch(updateSelectedNoteId(props.id));
  }

  return (
    <div className="NotePreview" onClick={newNoteSelected}>
      <div>{props.title}</div>
      <p>{trucatedText}</p>
    </div>
  );
}

export default NotePreview;
