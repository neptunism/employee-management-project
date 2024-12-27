import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) =>{
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className="container my-5">
    <h2 className="text-center mb-4 fw-bold">List of Employees</h2>
    <div className="d-flex justify-content-between mb-3">
      <button
        className="btn mb-2"
        style={{
          backgroundColor: '#7b98ab',
          color: '#003049',
          fontWeight: 'bold',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
        }}
        onClick={addNewEmployee}
      >
        Add Employee
      </button>
    </div>
    <div className="table-responsive shadow rounded">
      <table className="table table-hover align-middle text-center">
        <thead
          style={{
            backgroundColor: '#588157',
            color: '#dad7cd',
            fontWeight: 'bold',
          }}
        >
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn"
                  style={{
                    backgroundColor: '#588157',
                    color: '#dad7cd',
                    fontWeight: 'bold',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '5px',
                  }}
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                  className="btn"
                  style={{
                    backgroundColor: '#ad2831',
                    color: '#dad7cd',
                    fontWeight: 'bold',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '5px',
                    marginLeft: '10px',
                  }}
                  onClick={() => removeEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  
  )
}

export default ListEmployeeComponent