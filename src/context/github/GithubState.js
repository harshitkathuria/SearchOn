import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import { GET_JOBS, GET_JOB, JOBS_ERROR, SET_LOADING } from "../types";

const GithubState = props => {
  const initialState = {
    jobs: [],
    job: null,
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Jobs
  const searchJobs = async ({ position, city, full_time }) => {
    setLoading();
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&location=${city}&full_time=${full_time}`,
        {
          params: { markdown: true }
        }
      );

      dispatch({
        type: GET_JOBS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: JOBS_ERROR,
        payload: err.message
      });
    }
  };

  // Search single job
  const getJob = async id => {
    setLoading();
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json?markdown=true`
      );

      dispatch({
        type: GET_JOB,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: JOBS_ERROR,
        payload: err.message
      });
    }
  };

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        jobs: state.jobs,
        job: state.job,
        loading: state.loading,
        error: state.error,
        searchJobs,
        getJob,
        setLoading
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
