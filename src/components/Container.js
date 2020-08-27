import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Container extends Component {
  state = {
    search: "",
    employees: [],
    filterEmployees: [],
    order: "",
  };
  // When component mounts, it gets a list of all available employees and filtered employees
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
  //When the search input changes it identifies names that are equivalent to our input
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
  handleFormSubmit = (event) => {
    event.preventDefault();
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
  //Sorts employees by last name
  sortEmployeesByName = () => {
    const sortEmployees = this.state.filterEmployees;
    if (this.state.order === "ascending") {
      const sortByName = sortEmployees.sort((a, b) =>
        a.name.last > b.name.last ? -1 : 1
      );
      console.log(sortByName);
      this.setState({
        filterEmployees: sortByName,
        order: "descending",
      });
    } else {
      const sortByName = sortEmployees.sort((a, b) =>
        a.name.last > b.name.last ? 1 : -1
      );
      this.setState({
        filterEmployees: sortByName,
        order: "ascending",
      });
    }
  };

  render() {
    return (
      <div>
        <SearchForm
          handleInputChange={this.handleInputChange}
          employee={this.state.employees}
        />
        <SearchResults
          results={this.state.filterEmployees}
          sortEmployeesByName={this.sortEmployeesByName}
        />
      </div>
    );
  }
}

export default Container;
