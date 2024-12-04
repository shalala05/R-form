import React, { Component } from "react";
class Employees extends Component {
    state = {
        employees: [],
        isLoading: true,
        error: null,
        filter: "all", 
    };

    componentDidMount() {
        fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Data fetch failed");
                }
                return response.json();
            })
            .then((data) => {
                const updatedData = data.map((employee, index) => ({
                    ...employee,
                    alive: index < 2,
                }));
                this.setState({ employees: updatedData, isLoading: false });
            })
            .catch((error) => {
                this.setState({ error: error.message, isLoading: false });
            });
    }

    handleFilter = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { employees, isLoading, error, filter } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        const filteredEmployees = employees.filter((employee) => {
            if (filter === "alive") return employee.alive === true;
            if (filter === "dead") return employee.alive === false;
            return true;
        });

        return (
            <div>
                <div>
                    <button onClick={() => this.handleFilter("alive")}>The Live</button>
                    <button onClick={() => this.handleFilter("dead")}>The Dead</button>
                </div>
                <ul>
                    {filteredEmployees.map((employee) => (
                        <li key={employee.id}>
                            <strong>Name:</strong> {employee.name} <br />
                            <strong>Department:</strong> {employee.department} <br />
                            <strong>Role:</strong> {employee.role} <br />
                            <strong>Alive:</strong> {employee.alive ? "Yes" : "No"}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Employees;
