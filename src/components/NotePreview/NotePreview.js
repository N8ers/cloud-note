import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./NotePreview.css";

function NotePreview(props) {
  const [trucatedText, setTruncatedText] = useState("");
  useEffect(() => {
    let updatedNote = props.note;
    if (props?.note?.length > 36) {
      updatedNote = props.note.substring(0, 36) + "...";
    }
    setTruncatedText(updatedNote);
  }, [props.note]);

  const handleSelectedNoteChange = () => {
    props.changeSelectedNote(props.id);
  };

  return (
    <div className="NotePreview" onClick={handleSelectedNoteChange}>
      <Link to={`/${props.id}`} className="link-container">
        <div>{props.title}</div>
        <p>{trucatedText}</p>
      </Link>
    </div>
  );
}

export default NotePreview;
