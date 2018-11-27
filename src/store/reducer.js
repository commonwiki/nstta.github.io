import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";
import { reducer as HomeReducer } from "../pages/home/store";
import { reducer as SearchReducer } from "../pages/search/store";

export default combineReducers({
  header: headerReducer,
  home: HomeReducer,
  search: SearchReducer
});
