"use client";
import { signIn } from "next-auth/react";
import React from "react";

const MainPageSignInButton = () => {
  return (
    <button
      className="btn fs-4" style={{fontFamily: "kufi", letterSpacing:"2px"}}
      onClick={() => {
        signIn("google");
      }}
    >
      Login
    </button>
  );
};

export default MainPageSignInButton;
