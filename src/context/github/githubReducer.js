import { GET_JOBS, GET_JOB, JOBS_ERROR, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
        loading: false
      };
    case GET_JOB:
      return {
        ...state,
        job: action.payload,
        loading: false
      };
    case JOBS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
