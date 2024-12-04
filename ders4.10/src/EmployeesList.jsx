import React, { Component } from "react";
import PropTypes from "prop-types";

class EmployeesList extends Component {
  state = {
    employees: [], 
    search: "",
    filter: "all",
    isLoading: true,
    error: null, 
  };

  componentDidMount() {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Melumat alina bilmedi");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ employees: data, isLoading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, isLoading: false });
      });
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  getFilteredEmployees = () => {
    const { employees, search, filter } = this.state;

    return employees.filter((employee) => {
      const matchesSearch = employee.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesFilter =
        filter === "all" || employee.department === filter;
      return matchesSearch && matchesFilter;
    });
  };

  render() {
    const { search, filter, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Məlumatlar yüklənir...</p>;
    }

    if (error) {
      return <p>Səhv baş verdi: {error}</p>;
    }

    const filteredEmployees = this.getFilteredEmployees();

    return (
      <div>
        <h1>Employees List</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={this.handleSearchChange}
        />
        <select value={filter} onChange={this.handleFilterChange}>
          <option value="all">All Departments</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>
        <ul>
          {filteredEmployees.map((employee) => (
            <li key={employee.id}>
              {employee.name} - {employee.department}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

EmployeesList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
    })
  ),
};

export default EmployeesList;
