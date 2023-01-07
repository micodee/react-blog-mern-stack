const initialStateHome = {
  dataBlog: [],
};
const HomeReducer = (state = initialStateHome, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataBlog: action.payload, // bisa juga gunakan = dataBlog: action.value
    };
  }
  return state;
};

export default HomeReducer;
