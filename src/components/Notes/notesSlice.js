import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      id: 13,
      title: "note 3",
      body: "I am a note body that gets truncated, or at least hopefully!",
    },
    {
      id: 11,
      title: "note 1",
      body: "I am a note body that gets truncated, or at least hopefully!",
    },
    {
      id: 14,
      title: "note 4",
      body: "I am a note body that gets truncated, or at least hopefully!",
    },
    {
      id: 12,
      title: "note 2",
      body: "I am a note body that gets truncated, or at least hopefully!",
    },
  ],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: initialState.notes,
  },
  reducers: {
    updateNote: (state, action) => {
      const fieldToChange = action.payload.title ? "title" : "body";

      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          note[fieldToChange] = action.payload[fieldToChange];
        }
        return note;
      });
    },
  },
});

export const { updateNote } = notesSlice.actions;

export default notesSlice.reducer;
