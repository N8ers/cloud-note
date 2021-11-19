import React, { useState } from "react";

import "./NewNote.css";

const NewNote = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="NotePad">
      <div className="buttonContainer">
        <button className="saveBtn">save</button>
        <button className="cancelBtn">cancel</button>
      </div>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <textarea
        value={body}
        onChange={(event) => setBody(event.target.value)}
      ></textarea>
    </div>
  );
};

export default NewNote;
