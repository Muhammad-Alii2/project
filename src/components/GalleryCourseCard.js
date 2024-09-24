"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import style from "@/styles/GalleryCourseCard.module.css";
import GalleryCourseCardBtnStyles from "@/styles/buttons/GalleryCourseCardBtnStyles.css";
import { X } from "lucide-react";

const GalleryCourseCard = ({ course, handleDelete }) => {
  const handleClickDelete = async () => {
    const shouldDelete = window.confirm(
      `Are you sure you want to delete the course of ${course.name}?`
    );
    if (shouldDelete) {
      await handleDelete(course.id);
    } else {
      alert("Course deletion canceled.");
    }
  };

  const getFontSizeStyle = (textLength) => {
    if (textLength <= 10) return { fontSize: "30px" }; // Small course name
    if (textLength <= 20) return { fontSize: "28px" }; // Medium course name
    if (textLength <= 60) return { fontSize: "1.36rem" }; // large course name
    return { fontSize: "24px" }; // Normal course name
  };

  const fontSizeStyle = getFontSizeStyle(course.name.length);
  return (
    <>
      <div className={style.GalleryCourseCard} >
        <div className="card border border-0">
          {/*This chunk of code is for course name & picture*/}
          <Link
            className="text-capitalize  text-decoration-none"
            style={{ fontFamily: "kufi"}}
            href={`/course/${course.id}/0/0`}
          >
            <Image
              src={course.image || ""}
              className="card-img-top"
              width={300}
              height={300}
              alt="picture of the course"
              priority={true}
            />

            {/* put this (mt-5 p-5) for tag adjustment in below div and h3 */}
            <div className="card-img-overlay">
            <h3 className="course-name" style={fontSizeStyle}>
                {" "}
                <span className=" badge rounded-pill text-dark bg-white  bg-opacity-75  ">
                  {course.name}
                </span>
              </h3>
            </div>
          </Link>

          {/*This chunk of code is for units*/}
          <ul className=" list-group list-group-flush">
            <li className=" list-group-item"
                style={{ backgroundColor: '#0d1117'}}>
              <h5 className="text-light font-monospace">Units:</h5>
              {course.units.map((unit, unitIndex) => {
                return (
                  <Link
                    className="text-start btn m-1"
                    style={{
                      borderRadius: '8px', // rounded corners
                      padding: '0.25rem 0.5rem', // padding
                      fontSize: '1.1rem', // font size
                      fontFamily: "Kufi",
                      background:"#343a40"
                    }}
                    href={`/course/${course.id}/${unitIndex}/0`}
                    key={unit.id}
                  >
                    {unit.name}
                  </Link>
                );
              })}
            </li>
          </ul>
          {/*Gallery Course delete button*/}
          <button className="GDbtn" onClick={handleClickDelete}>
            <X className="icon" size={30} strokeWidth={3} absoluteStrokeWidth />
          </button>
        </div>
      </div>
    </>
  );
};

export default GalleryCourseCard;
