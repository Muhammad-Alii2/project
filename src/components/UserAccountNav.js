"use client";
import React from "react";
import { BiCoinStack } from 'react-icons/bi';

const UserAccountNav = ({ user }) => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3" style={{background:'#212529', fontFamily:'kufi', borderRadius:'18px' }}>
      <div className="d-flex align-items-center">
        {user?.image && (
       <img
       src={user.image}
       alt={`${user.name}'s profile`}
       className="rounded-circle"
       style={{
         width: "70px",
         height: "70px",
         marginRight: "15px",
         border: "2px solid #f09042", // Custom border color (replace with your desired color)
       }}
     />     
        )}
        <div className="d-flex flex-column">
          {user?.name && <div style={{ fontSize: "24px"}}>{user.name} </div>}
          {user?.email && <div style={{ fontSize: "14px" }}>{user.email}</div>}
        </div>
      </div>
      <div className="mt-4" style={{ fontSize: "26px" }}>
      <BiCoinStack size={25} style={{ marginLeft: '8px', marginBottom:'5px' }} /> {user?.credits || "0"}
      </div>
    </div>
  );
};

export default UserAccountNav;
