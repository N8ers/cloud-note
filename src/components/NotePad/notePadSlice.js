import { createSlice } from "@reduxjs/toolkit";

const lorem =
  "I'm baby four dollar toast vaporware sartorial coloring book organic. Banjo yuccie post-ironic tumeric. Forage kickstarter echo park, schlitz bicycle rights humblebrag keffiyeh live-edge kombucha hoodie raw denim poutine pug knausgaard food truck. Typewriter cloud bread austin gluten-free VHS actually PBR&B live-edge. Roof party austin edison bulb banh mi williamsburg chia biodiesel authentic. Church-key lyft distillery artisan migas vaporware XOXO mustache. Photo booth kitsch cardigan fanny pack, gluten-free flexitarian microdosing etsy YOLO selvage.";

export const notePadSlice = createSlice({
  name: "notePad",
  initialState: {
    value: lorem,
  },
  reducers: {
    updateNote: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateNote } = notePadSlice.actions;

export default notePadSlice.reducer;
