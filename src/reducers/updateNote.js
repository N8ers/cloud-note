const updateNoteReducer = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_NOTE":
      return state;
    default:
      return state;
  }
};

export default updateNoteReducer;
