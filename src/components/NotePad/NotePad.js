import React from "react";
import { useDispatch } from "react-redux";

import { updateNote, deleteNote } from "../Notes/notesSlice";

import "./NotePad.css";

function NotePad(props) {
  const dispatch = useDispatch();

  return (
    <div className="NotePad">
      {props.note && props.note.id && (
        <div>
          <input
            value={props.note.title}
            onChange={(event) =>
              dispatch(
                updateNote({
                  title: event.target.value,
                  id: props.note.id,
                })
              )
            }
          />
          <textarea
            value={props.note.note}
            onChange={(event) =>
              dispatch(
                updateNote({
                  note: event.target.value,
                  id: props.note.id,
                })
              )
            }
          ></textarea>
        </div>
      )}
    </div>
  );
}

export default NotePad;
