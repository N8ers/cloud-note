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
