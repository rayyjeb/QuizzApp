// CREATING REACT APP
import React, { useContext, useState } from "react";
import { AppContext } from "./context";
// FUNCTION FOR THE SCORE PAGE
const ScorePage = ({ QuizPage }) => {
  const [darkMode, setDarkMode] = useState(true);
  const { checkCorrect, setIsCorrect } = useContext(AppContext);
  // PERCENTAGE CALCULATION
  const calculatePercentage = () => (checkCorrect / 10) * 100;
  const togglemode = () => {
    setDarkMode(!darkMode);
  };
  return (
    // MAIN BODY DIV
    <div
      className="mainBody"
      style={{
        backgroundColor: darkMode ? "#25243C" : "#FFFFFF",
        height: "100vh",
        margin: "0",
        padding: "0",
      }}
    >
      {/* NAVBAR */}
      <div className="navBarParent">
        <nav>
          <h1
            className="logo"
            style={{
              color: darkMode ? "#FFFFFF" : "#25243C",
            }}
          >
            QUIZZR.
          </h1>
          <button
            className="Modes"
            onClick={togglemode}
            style={{
              backgroundColor: darkMode ? "#302F4D" : "#282828",
            }}
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M11 16.4546C14.0125 16.4546 16.4546 14.0125 16.4546 11C16.4546 7.98755 14.0125 5.54547 11 5.54547C7.98755 5.54547 5.54547 7.98755 5.54547 11C5.54547 14.0125 7.98755 16.4546 11 16.4546Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.0909 11H21"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 1.90909V1"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 21V20.0909"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.2727 18.2727L17.3636 17.3636"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.2727 3.72726L17.3636 4.63636"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.72729 18.2727L4.63639 17.3636"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.72729 3.72726L4.63639 4.63636"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 11H1.90909"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.60836 0.26638C7.2538 -0.0502 6.83912 -0.0203529 6.58562 0.0350201C6.36856 0.0824401 6.11781 0.18225 5.8901 0.27289L5.84696 0.29005C5.62712 0.37743 5.41143 0.47279 5.20027 0.57574C4.64752 0.84523 4.12582 1.1668 3.6418 1.53393C1.43057 3.21115 0 5.84546 0 8.8112C0 13.898 4.19962 18 9.3531 18C12.5267 18 15.3348 16.446 17.026 14.0672C17.233 13.7761 17.4234 13.4724 17.5957 13.1577L17.6176 13.1177C17.7281 12.916 17.8533 12.6877 17.9237 12.4829C18.0093 12.2342 18.0762 11.8413 17.8161 11.4626C17.543 11.0649 17.1217 11.0026 16.8717 10.9962C16.6473 10.9904 16.3745 11.0261 16.1203 11.0593L16.0744 11.0653C11.2806 11.6904 9.0584 10.3722 8.0675 8.67189C7.01574 6.86708 7.14345 4.31473 7.75508 2.1013L7.76754 2.05626C7.84069 1.79187 7.91699 1.51612 7.94451 1.28716C7.97364 1.04487 7.98139 0.59946 7.60836 0.26638ZM5.87193 1.9466C5.9994 1.88445 6.12884 1.82561 6.26014 1.77019C5.62665 4.10784 5.39604 7.12373 6.74512 9.4387C8.15899 11.8649 11.1114 13.2253 16.1594 12.5928C16.0414 12.7959 15.9142 12.9934 15.7783 13.1846C14.3656 15.1717 12.0166 16.4742 9.3531 16.4742C5.02029 16.4742 1.52959 13.0314 1.52959 8.8112C1.52959 6.34818 2.71556 4.15331 4.56761 2.74853C4.97268 2.44129 5.40932 2.17215 5.87193 1.9466Z"
                  fill="white"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>
      {/* RESULT BOX */}
      <div className="mainQuizBox">
        <div
          className="restartBox"
          style={{
            backgroundColor: darkMode ? "#302F4D" : "#282828",
          }}
        >
          {" "}
          {/* CIRCLES LEFT CORNER */}
          <div className="circleDecorations flex start">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
          </div>
          <div className="parentCircle">
            <div className="flex1">
              <h1 className="topicHeader">FINAL RESULT</h1>
              <div className="scoreCircle">
                <h1> {calculatePercentage()}% </h1>
              </div>
              <h2> YOU SCORED {checkCorrect}/10</h2>
{/* RESTART BUTTON */}
              <div className="restartDiv">
                <button
                  onClick={() => QuizPage()}
                  className="restartBtn"
                  style={{
                    backgroundColor: darkMode ? "#9CE38B" : "#FFE500",
                    color: darkMode ? "#101010" : "#474747",
                  }}
                >
                  RESTART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// EXPORT 
export default ScorePage;
