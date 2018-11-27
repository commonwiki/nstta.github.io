import axios from "axios";
import { fromJS } from "immutable";
import * as constants from "./constants";

const getFoucsData = result => ({
  type: constants.GET_FOCUS_DATA,
  focus: fromJS(result.list)
});

export const getFoucs = () => {
  return dispatch => {
    axios
      .get("/api/index.json")
      .then(res => {
        const result = res.data.data;
        dispatch(getFoucsData(result));
      })
      .catch(() => {
        console.info("error");
      });
  };
};
