import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import { updateNote } from "../Notes/notesSlice";

import "./NotePad.css";

function NotePad(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const note = useSelector((state) =>
    state.notes.notes.find((note) => note.id === parseInt(id))
  );

  return (
    <div className="NotePad">
      {id && note && note.id && (
        <div>
          <input
            value={note.title}
            onChange={(event) =>
              dispatch(
                updateNote({
                  title: event.target.value,
                  id: props.selectedNote.id,
                })
              )
            }
          />
          <textarea
            value={note.body}
            onChange={(event) =>
              dispatch(
                updateNote({
                  body: event.target.value,
                  id: props.selectedNote.id,
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
