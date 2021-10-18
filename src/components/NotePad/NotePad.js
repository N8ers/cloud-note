import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getNotes } from "../../helpers/axios";

import { useParams } from "react-router-dom";

import { updateNote, fetchNotes } from "../Notes/notesSlice";

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
      <button onClick={getNotes}>Fetch Notes with Helper</button>
      <button onClick={() => dispatch(fetchNotes)}>Fetch Notes</button>
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
