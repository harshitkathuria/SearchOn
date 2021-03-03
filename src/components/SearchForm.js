import React from "react";

const SearchForm = () => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s4 offset-s1">
            <input type="text" name="position" />
            <label htmlFor="position">Position</label>
          </div>
          <div className="input-field col s4">
            <input type="text" name="city" />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field col s3">
            <p>
              <label>
                <input type="checkbox" className="filled-in" />
                <span>Full Time</span>
              </label>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
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
