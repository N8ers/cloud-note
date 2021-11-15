import React, { useState } from "react";

const NewNote = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function updateTitle(event) {}
  function updateBody(event) {}

  return (
    <div>
      <button>save</button>
      <button>cancel</button>
      <input
        value={title}
        onChange={(event) => updateTitle(event.target.value)}
      />
      <textarea
        value={body}
        onChange={(event) => updateBody(event.target.value)}
      ></textarea>
    </div>
  );
};

export default NewNote;
