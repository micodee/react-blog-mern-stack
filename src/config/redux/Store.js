import { legacy_createStore } from "redux";

const initialState = {
  dataBlog: [],
  
};

const reducer = (state = initialState, action) => {

  return state;
};

const Store = legacy_createStore(reducer);

export default Store;
