import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedNoteId: null,
  notes: [
    {
      id: 11,
      title: "note 1",
      body: "I am a note body that gets truncated, or at least hopefully!",
    },
    {
      id: 12,
      title: "note 2",
      body: "I am a note body that gets truncated, or at least hopefully!",
    },
    {
      id: 13,
      title: "note 3",
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
  reducers: {},
});

export const {} = notesSlice.actions;

export default notesSlice.reducer;
