"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SignInButton = () => {
  return (
    <button
      className="btn btn-outline-success text-green" style={{fontFamily: "kufi", letterSpacing:"2px"}}
      onClick={() => {
        signIn("google");
      }}
    >
      log In
    </button>
  );
};

export default SignInButton;
