import React, { useState } from "react";

const NewNote = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div>
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
