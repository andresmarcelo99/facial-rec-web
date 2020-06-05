import {
  GET_CLIENT,
  EDIT_CLIENT,
  LOGGIN,
  ERROR,
  ADD_CLIENT,
  DELETE_CLIENT,
  CLIENTS_LOADING,
  SET_CURR,
} from "../actions/types";

const initialState = {
  clients: [],
  logged_client: {},
  alert: false,
  errorType: "",
  curr: "",
  logged: false,
  token: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CLIENT:
      return {
        ...state,
        clients: action.payload,
        loading: false,
      };
    case DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter((emp) => emp._id !== action.payload),
      };
    case ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients, action.payload],
        alert: false,
        logged: true,
      };

    case LOGGIN:
      return {
        ...state,
        logged: true,
        token: action.payload,
        logged_client: action.payload,
      };

    case EDIT_CLIENT:
      return {
        ...state,
        clients: [...state.clients],
        alert: false,
      };

    case SET_CURR:
      return {
        ...state,
        curr: action.payload,
      };

    case ERROR:
      return {
        ...state,
        errorType: action.payload,
        alert: true,
      };

    default:
      return state;
  }
}
