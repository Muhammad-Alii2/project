"use client";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminAccountNav = ({ user }) => {
  return (
    <div className="bg-dark text-light py-4" style={{ width: "100%" }}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          {/* Left section: User Profile Image */}
          {user?.image && (
            <div className="d-flex align-items-center">
              <img
                src={user.image}
                alt={`${user.name}'s profile`}
                className="rounded-circle border border-warning border-3 me-3"
                style={{ width: "100px", height: "100px" }}
              />
              <div>
                {/* User Info */}
                {user?.name && (
                  <h4 className="mb-0 text-light">{user.name}</h4>
                )}
                {user?.email && (
                  <small className="text-muted">{user.email}</small>
                )}
              </div>
            </div>
          )}

          {/* Right section: Admin Badge and Credits */}
          <div className="d-flex flex-column align-items-end">
            {user?.role && (
              <span className="badge bg-danger mb-2" style={{ fontSize: "1.2rem", padding: "0.7em 1.5em" }}>
                {user.role.toUpperCase()}
              </span>
            )}
            
              <span className="badge bg-success" style={{ fontSize: "1rem", padding: "0.5em 1.5em" }}>
                Credits: {user.credits}
              </span>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAccountNav;
