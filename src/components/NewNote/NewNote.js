import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./NewNote.css";

const NewNote = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const history = useHistory();

  function handleSave() {
    console.log("Saving: ", title, body);
  }

  function handleCancel() {
    history.push("/");
  }

  return (
    <div className="NotePad">
      <div className="buttonContainer">
        <button onClick={handleSave} className="saveBtn">
          save
        </button>
        <button onClick={handleCancel} className="cancelBtn">
          cancel
        </button>
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
