import React, { useState } from "react";

import "./NewNote.css";

const NewNote = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="NotePad">
      <button>save</button>
      <button>cancel</button>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <textarea
        value={body}
        onChange={(event) => setBody(event.target.value)}
      ></textarea>
    </div>
  );
};

export default NewNote;
