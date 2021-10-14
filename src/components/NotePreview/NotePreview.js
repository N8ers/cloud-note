import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    // We might be able to get rid of this (here and in state) if router handles it
    dispatch(updateSelectedNoteId(props.id));
  }

  return (
    <Link
      to={`/notes/${props.id}`}
      className="NotePreview"
      onClick={newNoteSelected}
    >
      <div>{props.title}</div>
      <p>{trucatedText}</p>
    </Link>
  );
}

export default NotePreview;
