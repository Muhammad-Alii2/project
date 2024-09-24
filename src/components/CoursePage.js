"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Progressbar from "@/components/Progressbar";
import MainVideoSummary from "./MainVideoSummary";
import QuizCards from "./QuizCards";
import CourseSideBar from "./CourseSideBar";
import ResultPopup from "./ResultPopup";
import style from "@/styles/finalgeneration.module.css";
import ResetBtnStyles from "@/styles/buttons/ResetBtnStyles.css";
import FinalPageNavigationButtonsStyles from "@/styles/buttons/FinalPageNavigationButtonsStyles.css";
import styles from "@/styles/buttons/ShowResultBtnStyles.css";
import { BiReset } from "react-icons/bi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FastForward } from "lucide-react";

const CoursePage = ({
  course,
  unitIndex,
  chapterIndex,
  chapter,
  questions,
}) => {
  const [loading, setLoading] = useState(true);
  const [totalProgress, setTotalProgress] = useState(0);
  const [videoDone, setVideoDone] = useState({});
  const [quizDone, setQuizDone] = useState({});
  const [answers, setAnswers] = useState({});
  const [booleans, setBooleans] = useState({});
  const [increment, setIncrement] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  // Popup function to show overall-result
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Function to fetch progress data from the server
  const fetchProgress = async () => {
    try {
      // Fetch progress data
      const response = await fetch("/api/progress/getProgress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId: course.id,
          unitIndex: unitIndex,
          chapterIndex: chapterIndex,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch progress data");
      }

      // Parse response data
      const { progress, VideoDone, QuizDone, Answers, Booleans, Increment } =
        await response.json();

      // Update state variables
      setTotalProgress(progress);
      setVideoDone(VideoDone);
      setQuizDone(QuizDone);
      setAnswers(Answers);
      setBooleans(Booleans);
      setIncrement(Increment);
      // Update loading state
      setLoading(false);
    } catch (error) {
      console.error("Error fetching progress data:", error);
    }
  };

  // Fetch progress data when the component mounts
  useEffect(() => {
    linkButtonRef.current.click();
    fetchProgress();
  }, []);

  const handleVideoEnd = async () => {
    if (!videoDone[chapter.id]) {
      let newProgress;
      if (!questions.length == 0) {
        try {
          const response = await fetch("/api/progress/updateProgress", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              courseId: course.id,
              chapterId: chapter.id,
              videoDone: true,
            }),
          });

          if (!response.ok) {
            console.error("API call failed");
            return;
          }
          newProgress = await (totalProgress + increment);
        } catch (error) {
          console.error("Error during API call:", error);
        }
      } else {
        try {
          const response = await fetch("/api/progress/updateProgress", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              courseId: course.id,
              chapterId: chapter.id,
              videoDone: true,
              quizDone: true,
            }),
          });

          if (!response.ok) {
            console.error("API call failed");
            return;
          }
          newProgress = await (totalProgress + increment * 2);
          quizDone[chapter.id] = true;
        } catch (error) {
          console.error("Error during API call:", error);
        }
      }
      setTotalProgress(newProgress);
      videoDone[chapter.id] = true;
    }
  };
  const handleQuizEnd = async (answers) => {
    try {
      const response = await fetch("/api/progress/updateProgress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId: course.id,
          chapterId: chapter.id,
          quizDone: true,
          selectedAnswers: answers,
        }),
      });

      if (!response.ok) {
        console.error("API call failed");
        return;
      }
      quizDone[chapter.id] = true;
      const newProgress = await (totalProgress + increment);
      setTotalProgress(newProgress);
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };
  const handleReset = async () => {
    const shouldReset = window.confirm(
      `All your progress will be reset. Are you sure?`
    );

    if (shouldReset) {
      try {
        const response = await fetch("/api/progress/resetProgress", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            courseId: course.id,
          }),
        });

        if (response.ok) {
          setVideoDone({});
          setQuizDone({});
          setAnswers({});
          setBooleans({});
          setResetKey((prevKey) => prevKey + 1);
          setTotalProgress(0);
          alert("Course reset complete!");
        } else {
          console.error("API call failed");
          alert("Failed to reset course progress. Please try again.");
        }
      } catch (error) {
        console.error("Error during API call:", error);
        alert(
          "An error occurred while resetting course progress. Please try again later."
        );
      }
    } else {
      alert("Course reset canceled.");
    }
  };

  const handleChapterReattempt = async () => {
    const shouldReset = window.confirm(
      `Your chapter quiz progress will be reset. Are you sure?`
    );

    if (shouldReset) {
      try {
        const response = await fetch("/api/progress/chapterReattempt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chapterId: chapter.id,
          }),
        });

        if (response.ok) {
          const { [chapter.id]: omittedKeyQuiz, ...restQuiz } = quizDone;
          setQuizDone(restQuiz);
          setAnswers({});
          setBooleans({});
          setResetKey((prevKey) => prevKey + 1);
          setTotalProgress(totalProgress - increment);
          alert("Chapter reattempt complete!");
        } else {
          console.error("API call failed");
          alert("Failed to reattempt chapter. Please try again.");
        }
      } catch (error) {
        console.error("Error during API call:", error);
        alert(
          "An error occurred while reattempting chapter. Please try again later."
        );
      }
    } else {
      alert("Chapter reattempt canceled.");
    }
  };

  // This function is used for Navigation of chapters
  const unit = course.units[unitIndex];
  const nextUnit = course.units[unitIndex + 1];
  const nextChapter = unit.chapters[chapterIndex + 1];
  const prevUnit = course.units[unitIndex - 1];
  const prevChapter = unit.chapters[chapterIndex - 1];

  const linkButtonRef = useRef();

  // Render loading indicator if data is still being fetched
  if (loading) {
    return (
      <Link href={""} ref={linkButtonRef} style={{ display: "none" }}>
        Hidden Link
      </Link>
    );
  }
  return (
    <div className={style.finalgeneration}>
      <div className="container">
        <div className="row">
          <div className="col">
            <Progressbar progress={totalProgress} />
          </div>
          <div className="col-auto d-flex align-items-center">
            {/* Overall Progress reset button */}
            <button
              className="ResetBtn"
              type="button"
              onClick={handleReset}
              data-bs-toggle="tooltip"
              title="Reset your overall Progress"
            >
              <span
                className="button__text"
                style={{ fontFamily: "kufi", color: "", fontSize:"20px", fontWeight: "bold" }}
              >
                Reset
              </span>
              <span className="button__icon">
                <BiReset className="svg" size={30} />
              </span>
            </button>

            {/* Overall result Pop-up */}
            {parseInt(totalProgress) === 100 && (
              <div className="mt-3 ms-2">
                <button
                  className="cssbuttons-io-button"
                  style={{
                    fontFamily: "kufi",
                    fontWeight: "bold",
                  }}
                  onClick={togglePopup}
                >
                  Show Result
                  <div className="icon">
                    <div className="svg">
                      <MdOutlineDoubleArrow size={100} />
                    </div>
                  </div>
                </button>
                {showPopup && (
                  <ResultPopup courseId={course.id} onClose={togglePopup} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="row">
        {/* Course sidebar */}
        <div className="col-md-3 mt-4">
          <div className="">
            <CourseSideBar
              course={course}
              currentChapterId={chapter.id}
              chapterVideoDone={videoDone}
              chapterQuizDone={quizDone}
            />
          </div>
        </div>

        {/* Main video summary */}
        <div className="col-md-6">
          <div className="">
            <MainVideoSummary
              unitIndex={unitIndex}
              chapter={chapter}
              chapterIndex={chapterIndex}
              onVideoEnd={handleVideoEnd}
            />
            <div className="mb-3 ms-5 me-5 d-flex justify-content-between"
            style={{fontFamily:"kufi"}}
            >
              <div>
                {prevChapter ? (
                  <Link
                    className="text-decoration-none"
                    href={`/course/${course.id}/${unitIndex}/${
                      chapterIndex - 1
                    }`}
                  >
                    <button className="Previousbutton">
                      <div className="PreviousArrow">
                        <FastForward color="black" />
                      </div>
                      <span className="BtnText">Previous</span>
                    </button>
                  </Link>
                ) : (
                  prevUnit && (
                    <Link
                      className="text-decoration-none"
                      href={`/course/${course.id}/${unitIndex - 1}/${
                        prevUnit.chapters.length - 1
                      }`}
                    >
                      <button className="PreviousUnitButton">
                        <div className="PreviousUnitButtonArrow">
                          <FastForward color="white" />
                        </div>
                        <span
                          className="UnitButtonBtnText"
                          style={{fontFamily:"kufi"}}
                        >
                          Previous Unit
                        </span>
                      </button>
                    </Link>
                  )
                )}
              </div>
              <div>
                {nextChapter ? (
                  <Link
                    className="text-decoration-none"
                    href={`/course/${course.id}/${unitIndex}/${
                      chapterIndex + 1
                    }`}
                  >
                    <button className="Nextbutton">
                      <span className="BtnText">Next</span>
                      <div className="arrow">
                        <FastForward color="black" />
                      </div>
                    </button>
                  </Link>
                ) : (
                  nextUnit && (
                    <Link
                      className="text-decoration-none"
                      
                      href={`/course/${course.id}/${unitIndex + 1}/0`}
                    >
                      <button className="NextUnitButton">
                        <span
                          className="NextUnitButtonBtnText"
                          style={{fontFamily:"kufi"}}
                        >
                          Next Unit
                        </span>
                        <div className="Unitarrow">
                          <FastForward color="white" />
                        </div>
                      </button>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quiz card */}
        <div className="col-md-3 mt-4 mb-3">
          <div>
            <QuizCards
              key={resetKey}
              chapterId={chapter.id}
              chapterName={chapter.name}
              videoDone={videoDone[chapter.id]}
              questions={questions}
              extractedAnswers={answers}
              extractedBooleans={booleans}
              onQuizEnd={handleQuizEnd}
              onChapterReattempt={handleChapterReattempt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
