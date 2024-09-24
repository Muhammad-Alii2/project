import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import styles from "@/styles/QuizcardPopupsStyles.css";
import { X } from "lucide-react";
import { BiSolidErrorAlt } from "react-icons/bi";

const HistoryPopup = ({ chapterId, chapterName, onClose }) => {
  const [historyData, setHistoryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fontSize, setFontSize] = useState(24); // Initial font size for chapterName
  const [letterSpacing, setLetterSpacing] = useState(""); // Initial letter spacing

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await fetch("/api/result/getHistory", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chapterId,
          }),
        });

        if (!response.ok) {
          console.error("Failed to fetch history data");
          return;
        }

        const data = await response.json();
        setHistoryData(data.historyEntry);
        setIsLoading(false); // Set loading state to false when data is fetched
      } catch (error) {
        console.error("Error fetching history data:", error);
      }
    };

    fetchHistoryData();
  }, []);

   // Function to dynamically set font size based on text length
   const updateFontSize = () => {
    const textLength = chapterName.length;
    if (textLength > 22) {
      setFontSize(18); // Reduce font size for longer names
      setLetterSpacing("0.313em"); // Adjust letter spacing for longer names
    } else {
      setFontSize(24); // Default font size
      setLetterSpacing("0.625em"); // Default letter spacing
    }
  };

  // Call updateFontSize whenever chapterName changes
  useEffect(() => {
    updateFontSize();
  }, [chapterName]); 
  return (
    <div className="History-popup-background">
      <div className="History-popup mt-5">
        <div className="History-popup-inner">
          <div className="History-popup-content">
            <div>
              <h1 className="HistoryPopup-button" style={{ fontFamily: "Kufi", color: "", fontWeight: "", fontSize: `${fontSize}px` , letterSpacing: letterSpacing }}>
                <span className="HistoryPopup-button_lg">
                  <span className="HistoryPopup-button_sl"></span>
                  <span className="HistoryPopup-button_text">{chapterName}</span>
                </span>
              </h1>
              {isLoading ? (
                <Spinner animation="border" role="status" variant="light">
                  <span className="visually-hidden container"></span>
                </Spinner>
              ) : historyData == null ? (
                <div className="History-error">
                  <div className="History-error__icon ">
                    <BiSolidErrorAlt size={30} className="HistoryIcon-path" />
                  </div>
                  <div className="History-error__title" style={{ fontFamily: "Kufi", color: "", fontWeight: "", fontSize: "" }}>No history found</div>
                </div>
              ) : (
                JSON.parse(historyData).map((correctAnswer, index) => (
                  <div key={index} className="d-flex flex-row align-items-center">
                    <button className="History-popupAttempt m-2">
                      <span className="Attempt-span" style={{ fontFamily: "quando", color: "", fontWeight: "", }}>
                        Attempt {index + 1}
                      </span>
                    </button>
                    <div className="mb-3 mt-3">
                    <button className="HistoryPopup-Attempt-result" style={{ fontFamily: "Kufi"}}>
                       Quiz Score: {correctAnswer}/3
                    </button>
                    <button className="HistoryPopup-Attempt-resultScore ms-2" style={{ fontFamily: "Kufi"}}>
                    Percentage was {((correctAnswer / 3) * 100).toFixed(2)}%</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="Historypopup-closebtn-position">
            <button className="History-popup-closebtn" onClick={onClose}>
              <X
                className="History-popup-icon"
                size={30}
                strokeWidth={3}
                absoluteStrokeWidth
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPopup;
