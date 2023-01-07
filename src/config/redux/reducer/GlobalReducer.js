const initialState = {
  name: "micode",
};
const GlobalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state, // state lama dlcopy kemudian
      name: "marcel", // dirubah
    };
  }
  return state;
};

export default GlobalReducer;
