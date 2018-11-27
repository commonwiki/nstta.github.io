import axios from "axios";
import { fromJS } from "immutable";
import * as constants from "./constants";

export const changeTabItem = (index) => ({
  type: constants.TAB_ITEM_CHANGE,
  value: index
});
