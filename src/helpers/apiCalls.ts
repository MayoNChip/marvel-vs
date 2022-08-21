import axios from "axios";

export const API_CALLS = {
  getCharacters: async () => {
    const { data } = await axios.get("http://localhost:3000/api/characters");
    return data.data;
  },
};
