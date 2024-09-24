"use client";
import { useMutation } from "@tanstack/react-query";
import React, { useState, useEffect, forwardRef, useCallback, useImperativeHandle, } from "react";


const ChapterCard = forwardRef(
  ({ chapter, chapterIndex, setcompletedChapters }, ref) => {
    //Use this for making the color changes to chapter fetch success
    const [Success, setSuccess] = useState("");
    const { mutate: getChapterInfo, isPending } = useMutation({
      mutationFn: async () => {
        const response = await fetch("/api/chapter/getInfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chapterId: chapter.id }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
      },
    });

    const addChapterIdToSet = useCallback(() => {
      setcompletedChapters((prev) => {
        const newSet = new Set(prev);
        newSet.add(chapter.id);
        return newSet;
      });
    }, [chapter.id, setcompletedChapters]);

    useEffect(() => {
      if (chapter.videoId) {
        setSuccess(true);
        addChapterIdToSet();
      }
    }, [chapter, addChapterIdToSet]);

    useImperativeHandle(ref, () => ({
      async triggerLoad() {
        if (chapter.videoId) {
          addChapterIdToSet();
          return;
        }
        getChapterInfo(undefined, {
          onSuccess: () => {
            setSuccess(true);
            addChapterIdToSet();
          },
          onError: (error) => {
            console.error(error);
            setSuccess(false);
            addChapterIdToSet();
          },
        });
      },
    }));

    return (
      <div
        className="card container mt-1 mb-2 border-0"
        key={chapter.id}
        style={{
          backgroundColor:
            Success === true ? "#689C0D" : Success === false ? "#ff0000" : "",
        }}
      >
        <div className="row align-items-center">
          <div className="col">
            <h5 className="fs-4 m-1" style={{ fontFamily: "kufi" }}>
              Chapter-{chapterIndex + 1}: {chapter.name}
            </h5>
          </div>
          <div className="col-auto m-1">
            {  isPending && <div className="spinner-border mt-1" style={{width: "1.3rem", height: "1.3rem"}} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>}
          </div>
        </div>
      </div>
    );
  }
);

ChapterCard.displayName = "ChapterCard";

export default ChapterCard;
