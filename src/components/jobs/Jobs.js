import React, { useContext } from "react";
import Spinner from "../layout/Spinner";
import JobItem from "./JobItem";
import GithubContext from "../../context/github/githubContext";

const Jobs = () => {
  const githubContext = useContext(GithubContext);
  const { loading, jobs } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="jobs-layout" style={jobStyle}>
        {jobs.map(job => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    );
  }
};

const jobStyle = {
  display: "flex",
  flexDirection: "column"
};

export default Jobs;
