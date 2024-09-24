"use client";
import React from "react";
import "../styles/fonts.module.css";
import YouTube from "react-youtube";

const MainVideoSummary = ({ unitIndex, chapterIndex, chapter, onVideoEnd }) => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      rel: 0,
    },
  };
  return (
    <div className="MainVideoSummary">
      <div className=" bg-opacity-50 p-3 col-md-12 mt-4"
        style={{ borderRadius: '12px', }}
      >
        <h5
          className="fs-1 text-start text-capitalize fw-bold"
          style={{ fontFamily: "kufi", color: "#ffff" }}
        >
          {chapter.name}
        </h5>

        <h5 className="fs-4" style={{ fontFamily: "kufi", color: "#ffff" }}>
          Unit {unitIndex + 1} | Chapter {chapterIndex + 1}
        </h5>

        <div
          className="youtube-container border-0"
          style={{ borderRadius: "12px", overflow: "hidden", height: "20vw" }}
        >
          <YouTube
            title="chapter video"
            videoId={chapter.videoId}
            opts={opts}
            onEnd={(event) => {
              onVideoEnd();
            }}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="card m-2"
          style={{ background: '#0d1117', borderRadius: '18px', }}
        >
          <h3
            className="fs-3 text-light p-1 mt-2 mb-1 ms-1 me-1"
            style={{ fontFamily: "kufi" }}
          >
            Summary:
          </h3>
          <p
            className="text-light p-2 ms-1 me-1 mb-2"
            style={{ fontFamily: "kufi", textAlign: "justify", textJustify: "inter-word", fontSize: "16.5px" }}
          >
            {chapter.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainVideoSummary;
