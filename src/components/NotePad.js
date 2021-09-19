import React, { useState } from "react";
import "./NotePad.css";

function NotePad() {
  // example
  // const [currentStateValue, functionToUpdateState] = useState(initialState)

  const lorem =
    "I'm baby four dollar toast vaporware sartorial coloring book organic. Banjo yuccie post-ironic tumeric. Forage kickstarter echo park, schlitz bicycle rights humblebrag keffiyeh live-edge kombucha hoodie raw denim poutine pug knausgaard food truck. Typewriter cloud bread austin gluten-free VHS actually PBR&B live-edge. Roof party austin edison bulb banh mi williamsburg chia biodiesel authentic. Church-key lyft distillery artisan migas vaporware XOXO mustache. Photo booth kitsch cardigan fanny pack, gluten-free flexitarian microdosing etsy YOLO selvage.";
  const [note, updateNote] = useState(lorem);

  return (
    <div className="NotePad">
      <textarea
        value={note}
        onChange={(event) => updateNote(updateNote(event.target.value))}
      ></textarea>
    </div>
  );
}

export default NotePad;
