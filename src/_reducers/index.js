import { combineReducers } from "redux";
import kinder_reducer from "./reducers"; //리듀서 파일당 하나씩, 여기서 정의!

const rootReducer = combineReducers({
  kinder_reducer,
});

export default rootReducer;
