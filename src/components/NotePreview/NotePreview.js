import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./NotePreview.css";

function NotePreview(props) {
  const [trucatedText, setTruncatedText] = useState("");
  useEffect(() => {
    let updatedBody = props.body;
    if (props.body.length > 36) {
      updatedBody = props.body.substring(0, 36) + "...";
    }
    setTruncatedText(updatedBody);
  }, [props.body]);

  return (
    <div className="NotePreview">
      <Link to={`/${props.id}`} className="link-container">
        <div>{props.title}</div>
        <p>{trucatedText}</p>
      </Link>
    </div>
  );
}

export default NotePreview;
