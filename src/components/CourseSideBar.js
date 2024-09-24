import Link from "next/link";
import React from "react";
import "../styles/fonts.module.css";
import style from "@/styles/Course-SideBarStyles.css"

const CourseSideBar = ({
  course,
  currentChapterId,
  chapterVideoDone,
  chapterQuizDone,
}) => {
  const updatedList = course.units.map((unit, unitIndex) => {
    return (
      <div className="m-1" key={unit.id}
      >
        <hr className="flex-grow-1 bg-secondary" style={{ height: "4px", border: "none" }} />

        <h5
          className="text-capitalize fs-4 fw-bold text-start"
          style={{ fontFamily: "kufi", color: "#fff" }}
        >
          {unit.name}
        </h5>
        {unit.chapters.map((chapter, chapterIndex) => {
          const chapterId = chapter.id;
          const videoDone = chapterVideoDone[chapterId] || false;
          const quizDone = chapterQuizDone[chapterId] || false;
          const isChapterCompleted = videoDone && quizDone;

          return (
            <div key={chapter.id}>
              <Link
                className="text-decoration-none fw-bold lh-base fs-5"
                style={{
                  fontWeight:
                    chapter.id === currentChapterId ? "900" : "normal",
                  color: isChapterCompleted
                    ? "#9c399c"
                    : chapter.id === currentChapterId
                    ? "#f09042"
                    : "#A7B8C3",
                  fontFamily: "kufi",
                }}
                href={`/course/${course.id}/${unitIndex}/${chapterIndex}`}
              >
                {chapter.name}
              </Link>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div
      className="Course-sideBar mb-5 p-3"
      style={{ fontFamily: "kufi", background: '#0d1117', borderRadius: '18px', }}
    >
      <h5
        className="fs-1 text-center text-uppercase fw-bold"
        style={{ fontFamily: "kufi", color: "#ffffff"}}
      >
        {course.name}
      </h5>
      {updatedList}
    </div>
  );
};

export default CourseSideBar;
