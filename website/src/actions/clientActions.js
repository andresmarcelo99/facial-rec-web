import axios from "axios";
import {
  GET_CLIENT,
  LOGGIN,
  EDIT_CLIENT,
  ERROR,
  ADD_CLIENT,
  DELETE_CLIENT,
  CLIENTS_LOADING,
  SET_CURR,
} from "./types";

export const addClient = (client) => (dispatch) => {
  axios
    .post("/api/register", client)
    .then((res) =>
      dispatch({
        type: ADD_CLIENT,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err.response.data,
      });
      console.log(err.response.data);
    });
};

// export const addClient = (client) => ({
//   type: ADD_CLIENT,
//   payload: "registered",
// });

export const logClient = (client_log) => (dispatch) => {
  axios
    .post("/api/login", client_log)
    .then((res) => {
      dispatch({
        type: LOGGIN,
        payload: res.data,
      });
      console.log("logged");
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err.response.data,
      });
      console.log(err.response.data);
    });
};
