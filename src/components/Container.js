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
  //When the search input changes it shows the employee the name matches
  handleInputChange = (event) => {
    const employees = this.state.employees;
    const searchInput = event.target.value;
    const filterEmployees = employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(searchInput.toLowerCase()) >
        -1
    );
    this.setState({
      filterEmployees,
    });
  };

  //API call when page refreshes
  searchEmployees = () => {
    API.getEmployeeList()
      .then((res) =>
        this.setState({
          filterEmployees: res.data.results,
          employees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <SearchForm
          handleInputChange={this.handleInputChange}
          employee={this.state.employees}
        />
        <SearchResults results={this.state.filterEmployees} />
      </div>
    );
  }
}

export default Container;
