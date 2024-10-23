"use client";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "@/styles/admin/AdminPanel.css";
import sidebarStyles from "@/styles/sidebar.css";

const AdminPanel = ({}) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [credits, setCredits] = useState(5);
  const [initialCredits, setInitialCredits] = useState(); // Track initial credits
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/admin/getAllUsers', {
          method: 'POST',
        });
        const data = await response.json();
        if (data.success) {
          setUsers(data.allUsers);
          setFilteredUsers(data.allUsers);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    let filtered = users;

    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRole) {
      filtered = filtered.filter(user => user.role === selectedRole);
    }

    setFilteredUsers(filtered);
  }, [searchTerm, selectedRole, users]);

  const handleCreditsClick = (user) => {
    setCurrentUser(user);
    setInitialCredits(credits); // Save the initial credits value
    setCredits(credits);
    setShowModal(true);
  };

  const handleIncrement = () => {
    setCredits((prevCredits) => prevCredits + 5);
  };

  const handleDecrement = () => {
    setCredits((prevCredits) => (prevCredits > 5 ? prevCredits - 5 : 0));
  };

  const handleCloseModal = () => {
    setCredits(initialCredits); // Reset to the initial value
    setShowModal(false);
  };

  const handleAddCredits = async () => {
    try {
      const response = await fetch('/api/credits/updateCredits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: currentUser.id,
          userRole: currentUser.role,
          actionPerformed: 'credits bought',
          credsToUpdate: credits,
        }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log('Credits updated successfully');
  
        // Reload the page after updating credits
        window.location.reload();
      } else {
        console.error('Error updating credits:', data.error);
      }
    } catch (error) {
      console.error('Error in handleAddCredits:', error);
    } finally {
      setShowModal(false);
    }
  };
  


  return (
    <div className="container-fluid mb-5">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-gradient-dark text-light d-flex justify-content-between align-items-center p-4">
              <h4 className="mb-0 fw-bold adminHeading">Admin Panel</h4>
              <div className="d-flex align-items-center">
                <div className="dropdown me-2">
                  <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectedRole ? selectedRole : 'Filter by Role'}
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={() => setSelectedRole('')}>All</a></li>
                    <li><a className="dropdown-item" onClick={() => setSelectedRole('admin')}>Admin</a></li>
                    <li><a className="dropdown-item" onClick={() => setSelectedRole('basic')}>Basic</a></li>
                    <li><a className="dropdown-item" onClick={() => setSelectedRole('premium')}>Premium</a></li>
                  </ul>
                </div>
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search here"
                  style={{ maxWidth: '200px' }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="card-body">
              <table className="table table-hover table-borderless">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Credits</th>
                    <th scope="col">Role</th>
                    <th scope="col">Manage</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.credits}</td>
                        <td>
                          <span
                            className={`badge ${user.role === 'premium' ? 'bg-success text-dark text-capitalize p-2' :
                              user.role === 'basic' ? 'bg-light text-dark text-capitalize p-2' :
                                user.role === 'admin' ? 'bg-warning text-dark text-capitalize p-2' : 'bg-default'
                              }`}
                            style={{ fontSize: "16px" }}>
                            {user.role}
                          </span>
                        </td>

                        <td>
                          <button onClick={() => handleCreditsClick(user)} className="CreditsBtn">
                            Credits
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center text-danger">No users found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {showModal && (
            <div className="modal show d-block" tabIndex="-1" role="dialog">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content bg-dark text-light">
                  <div className="modal-header">
                    <h5 className="modal-title">Add Credits for {currentUser.name}</h5>
                    <button onClick={handleCloseModal} type="button" className="btn-close" aria-label="Close"></button>
                  </div>
                  <div className="modal-body text-center">
                    <div className="d-flex justify-content-center align-items-center mb-4">
                      <button onClick={handleDecrement} className="btn btn-outline-light btn-lg">-</button>
                      <h4 className="mx-3">{credits}</h4>
                      <button onClick={handleIncrement} className="btn btn-outline-light btn-lg">+</button>
                    </div>
                    <button onClick={handleAddCredits} className="btn btn-success">Add</button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
