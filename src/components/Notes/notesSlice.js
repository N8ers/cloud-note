import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedNoteId: null,
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
    selectedNoteId: initialState.selectedNoteId,
    notes: initialState.notes,
  },
  reducers: {
    updateSelectedNoteId: (state, action) => {
      state.selectedNoteId = action.payload;
    },
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

export const { updateSelectedNoteId, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
