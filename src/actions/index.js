export const increment = (incremnter) => {
  return {
    type: "INCREMENT",
    payload: incremnter,
  };
};

export const decrement = (incremnter) => {
  return {
    type: "DECREMENT",
    payload: incremnter,
  };
};

export const updateNote = (value) => {
  return {
    type: "UPDATE_NOTE",
    payload: value,
  };
};
