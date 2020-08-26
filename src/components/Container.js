import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Container extends Component {
  state = {
    search: "",
    employees: [],
    filterEmployees: [],
    order: "descend",
  };
  componentDidMount() {
    API.getEmployeeList()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filterEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <SearchResults results={this.state.filterEmployees} />
      </div>
    );
  }
}

export default Container;
