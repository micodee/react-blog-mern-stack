import { combineReducers } from "redux";
import GlobalReducer from "./GlobalReducer";
import HomeReducer from "./HomeReducer";

const Reducer = combineReducers({ HomeReducer, GlobalReducer });

export default Reducer;
