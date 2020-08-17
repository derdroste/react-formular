import { combineReducers, createStore } from "redux";
import { signUpReducer } from "./signUp/reducer";
import { loadState } from "../persist-state/persistedState";

const persistedState = loadState();

const rootReducer = combineReducers({
  signUp: signUpReducer,
});

const store = createStore(rootReducer, persistedState);
export { store };
