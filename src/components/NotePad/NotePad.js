import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import { updateNote } from "../Notes/notesSlice";

import "./NotePad.css";

function NotePad(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  let routeId = parseInt(id);

  const note = useSelector((state) =>
    state.notes.notes.find((note) => note.id === routeId)
  );

  return (
    <div className="NotePad">
      <h1>id: {id}</h1>
      {id && note && note.id && (
        <div>
          <input
            value={note.title}
            onChange={(event) =>
              dispatch(
                updateNote({
                  title: event.target.value,
                  id: routeId,
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
                  id: routeId,
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
