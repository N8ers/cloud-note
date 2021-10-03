import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateNoteBody, updateNoteTitle } from "./notePadSlice";

import "./NotePad.css";

function NotePad() {
  const note = useSelector((state) => state.notePad.value);
  const title = useSelector((state) => state.notePad.title);
  const dispatch = useDispatch();

  return (
    <div className="NotePad">
      <input
        value={title}
        onChange={(event) => dispatch(updateNoteTitle(event.target.value))}
      />
      <textarea
        value={note}
        onChange={(event) => dispatch(updateNoteBody(event.target.value))}
      ></textarea>
    </div>
  );
}

export default NotePad;
