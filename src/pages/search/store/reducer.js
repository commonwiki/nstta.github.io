import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  tabs: [""],
  cur_tab: 1
});

export default (state = defaultState, action) => {
  console.info(action.value);

  switch (action.type) {
    case constants.TAB_ITEM_CHANGE:
      return state.set("cur_tab", action.value);
    default:
      break;
  }

  return state;
};
