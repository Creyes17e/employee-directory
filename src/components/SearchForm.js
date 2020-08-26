import React from "react";

function SearchForm(props) {
  return (
    <form className="search offset-5">
      <div className="form-group">
        <input
          list="employees"
          style={{ width: "16rem" }}
          type="text"
          className="form-control"
          placeholder="Search"
          onChange={props.handleInputChange}
          value={props.value}
        />
      </div>
    </form>
  );
}

export default SearchForm;
