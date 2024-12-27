import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg shadow" style={{ backgroundColor: '#7b98ab' }}>
          <div className="container">
            <a className="navbar-brand fw-bold" href="https://www.neptunism.net" style={{ color: '#003049' }}>
              Employee Management System
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/employees"
                    style={{ color: '#003049' }}
                    activeStyle={{ fontWeight: 'bold', textDecoration: 'underline' }}
                  >
                    Employees
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/departments"
                    style={{ color: '#003049' }}
                    activeStyle={{ fontWeight: 'bold', textDecoration: 'underline' }}
                  >
                    Departments
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
