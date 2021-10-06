import React from "react";
import { useDispatch } from "react-redux";

import { updateNote } from "../Notes/notesSlice";

import "./NotePad.css";

function NotePad(props) {
  const dispatch = useDispatch();

  return (
    <div className="NotePad">
      {props?.selectedNote?.id &&
        props?.selectedNote?.title &&
        props?.selectedNote?.body && (
          <div>
            <input
              value={props.selectedNote.title}
              onChange={(event) =>
                dispatch(
                  updateNote({
                    value: event.target.value,
                    id: props.selectedNote.id,
                  })
                )
              }
            />
            <textarea
              value={props.selectedNote.body}
              onChange={(event) => dispatch(updateNote(event.target.value))}
            ></textarea>
          </div>
        )}
    </div>
  );
}

export default NotePad;
