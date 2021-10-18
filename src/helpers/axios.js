import axios from "axios";

export const getNotes = async () => {
  return await axios.get("http://localhost:4000/notes");
};
