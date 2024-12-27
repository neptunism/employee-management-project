import React, { useEffect, useState } from 'react'
import { deleteDepartment, getAllDepartments } from '../services/DeparmentService';
import { Link, useNavigate } from 'react-router-dom';

const ListDepartmentComponent = () => {

    const [departments, setDepartments] = useState([]);

    const navigator = useNavigate();

    useEffect( () => {
       listOfDepartments();
    }, [])

    function listOfDepartments(){
        getAllDepartments().then((response) => {
            console.log(response.data);
            setDepartments(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function updateDepartment(id){
        navigator(`/edit-department/${id}`)
    }


    function removeDepartment(id){
        deleteDepartment(id).then((response) => {
            console.log(response.data);
            listOfDepartments();
        }).catch(error => {
            console.error(error);
        })
    }
  return (
    <div className="container my-5">
    <h2 className="text-center mb-4 fw-bold">List of Departments</h2>
    <div className="d-flex justify-content-between mb-3">
      <Link
        to="/add-department"
        className="btn mb-2"
        style={{
          backgroundColor: '#669bbc',
          color: '#003049',
          fontWeight: 'bold',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          textDecoration: 'none',
        }}
      >
        Add Department
      </Link>
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
            <th>Department ID</th>
            <th>Department Name</th>
            <th>Department Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.departmentName}</td>
              <td>{department.departmentDescription}</td>
              <td>
                <button
                  onClick={() => updateDepartment(department.id)}
                  className="btn"
                  style={{
                    backgroundColor: '#588157',
                    color: '#dad7cd',
                    fontWeight: 'bold',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '5px',
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => removeDepartment(department.id)}
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

export default ListDepartmentComponent