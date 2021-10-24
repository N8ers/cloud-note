import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import { updateNote } from "../Notes/notesSlice";

import "./NotePad.css";

function NotePad(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  let routeId = parseInt(id);

  // WE AREN'T STORING THE NOTES IN STATE ANYMORE.... SO SHOULD WE???
  // const note = useSelector((state) =>
  //   state.notes.notes.find((note) => note.id === routeId)
  // );

  return (
    <div className="NotePad">
      {JSON.stringify(props.note)}
      {/* {props.note && props.note.id && (
        <div>
          <input
            value={props.note.title}
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
            value={props.note.body}
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
      )} */}
    </div>
  );
}

export default NotePad;
