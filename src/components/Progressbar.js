import React from "react";

const Progressbar = ({ progress }) => {
  return (
    <>
      <div className="container-fluid">
        {/* Progress bar */}
        <div className="row">
          <div className="col-md-12 mt-4">
            <div className="container">
              <div
                className="progress bg-secondary"
                style={{ width: `100%`, height: '5%' }}
                role="progressbar"
                aria-label="Warning striped example"
                aria-valuenow={`${progress}`}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar text-dark fw-bold"
                  style={{ width: `${progress}%`, background: "#f09042", fontFamily: "kufi", fontSize: "14px" }}
                >
                  {parseInt(progress)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Progressbar;
