import { legacy_createStore } from "redux";

const initialState = {
  dataBlogs: [],
  name: "micode",
};

const reducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_DATA_BLOG'){
    return{
        ...state,
        dataBlogs: action.payload // bisa juga gunakan = dataBlog: action.value
    }
  } 
  if (action.type === 'UPDATE_NAME'){
    return{
        ...state, // state lama dlcopy kemudian
        name: 'marcel' // dirubah
    }
  }
  return state;
};

const Store = legacy_createStore(reducer);

export default Store;
