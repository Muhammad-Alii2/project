"use client";
import React from "react";
import style from "@/styles/loader/loadingpage.module.css";
import Spinner from "react-bootstrap/Spinner";

const loading = () => {
  return (
    <div
      className={style.loadingpage}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <span className={style.loader}></span>
      <Spinner
        animation="border"
        style={{  width: "4rem", height: "4rem", color: "#f09042", borderWidth: "0.5rem",  }}
      >
        ;<span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
export default loading;
