import { combineReducers } from "redux";
import contactsSlice from "./contactsSlice";
import filterSlice from "./filerSlice";
import loader from "./loader";
import error from "./error";

const rootReducerSlice = combineReducers({
  contacts: contactsSlice,
  filter: filterSlice,
  error: error,
  loader: loader,
});

export default rootReducerSlice;
