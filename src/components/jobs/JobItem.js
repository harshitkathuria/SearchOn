import React from "react";

const JobItem = ({ job }) => {
  return (
    <div className="job card">
      <div className="card-content">
        <div className="row">
          <div className="col s10">
            <p className="flow-text">{job.title}</p>
            <blockquote>
              <div className="row company-info">
                <div className="col s6">
                  <p>
                    {job.company}, {job.location}
                  </p>
                </div>
                <div className="col s6">
                  Type: <span style={{ fontWeight: 400 }}>{job.type}</span>
                </div>
              </div>
            </blockquote>
          </div>
          <div className="col s2 right">
            <img
              className="responsive-img circle"
              style={{ maxHeight: "70px" }}
              src={job.company_logo}
              alt="Logo"
            />
          </div>
        </div>
        <button className="grey darken-3 white-text btn waves-effect">
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobItem;
