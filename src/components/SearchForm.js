import React, { useState, useContext } from "react";
import GithubContext from "../context/github/githubContext";

const SearchForm = () => {
  const [form, setForm] = useState({
    position: "",
    city: "",
    full_time: false
  });

  const { position, city } = form;
  const githubContext = useContext(GithubContext);
  const { searchJobs } = githubContext;

  const onChange = e => {
    if (e.target.name === "full_time") {
      setForm({ ...form, [e.target.name]: e.target.checked });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    searchJobs(form);
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s4 offset-s1">
            <input
              type="text"
              name="position"
              value={position || ""}
              onChange={onChange}
            />
            <label htmlFor="position">Position</label>
          </div>
          <div className="input-field col s4">
            <input
              type="text"
              name="city"
              value={city || ""}
              onChange={onChange}
            />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field col s3">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  name="full_time"
                  onClick={onChange}
                />
                <span>Full Time Only</span>
              </label>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s10 offset-s2">
            <button
              className="btn btn-block waves-effect waves-light"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
