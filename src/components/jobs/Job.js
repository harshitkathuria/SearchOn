import React, { useContext, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Job = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { job, getJob, loading } = githubContext;

  useEffect(() => {
    getJob(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (!job || loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="container">
          <Link to="/" className="btn btn-light">
            Back To Search
          </Link>
          <div className="card">
            <div className="card-content">
              <div className="card-header">
                <div className="row">
                  <div className="col s7">
                    <div className="flow-text">{job.title}</div>
                  </div>
                  <div className="company-info col s3 offset-s2">
                    Posted On:{" "}
                    <span style={{ fontWeight: "bold" }} className="chip">
                      {job.created_at.split(" ")[2] +
                        " " +
                        job.created_at.split(" ")[1]}
                    </span>
                  </div>
                </div>
                <blockquote>
                  <div className="row company-info">
                    <div className="col s7">
                      <p>
                        {job.company}, {job.location}
                      </p>
                      <a target="_blank" href={job.company_url}>
                        {job.company_url}
                      </a>
                    </div>
                    <div className="col s3 offset-s2">
                      Type: <span className="chip">{job.type}</span>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div className="row">
                <div className="col">
                  <div id="about" style={{ fontWeight: 500 }}>
                    About
                  </div>
                </div>
              </div>
              <div className="row">
                <ReactMarkdown className="col s12" children={job.description} />
              </div>
            </div>
            <div className="card-action">
              <ReactMarkdown plugins={[gfm]} children={job.how_to_apply} />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Job;
