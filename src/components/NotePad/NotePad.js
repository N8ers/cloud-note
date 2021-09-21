import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateNote } from "./notePadSlice";

import "./NotePad.css";

function NotePad() {
  const note = useSelector((state) => state.notePad.value);
  const dispatch = useDispatch();

  return (
    <div className="NotePad">
      <textarea
        value={note}
        onChange={(event) => dispatch(updateNote(event.target.value))}
      ></textarea>
    </div>
  );
}

export default NotePad;
