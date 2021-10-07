import React from "react";
import { useDispatch } from "react-redux";

import { updateNote } from "../Notes/notesSlice";

import "./NotePad.css";

function NotePad(props) {
  const dispatch = useDispatch();
  const renderNote =
    props?.selectedNote?.id &&
    props?.selectedNote?.title &&
    props?.selectedNote?.body;

  return (
    <div className="NotePad">
      {renderNote && (
        <div>
          <input
            value={props.selectedNote.title}
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
            value={props.selectedNote.body}
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
