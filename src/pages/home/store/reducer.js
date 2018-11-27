import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  focus: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_FOCUS_DATA:
      return state.set("focus", action.focus);
    default:
      break;
  }
  return state;
};
