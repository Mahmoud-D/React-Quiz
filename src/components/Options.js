import React from "react";

export default function Options({ Question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      {" "}
      <div className="options">
        {Question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === Question.correctOption
                  ? "correct"
                  : "wrong "
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => {
              dispatch({ type: "newAnswer", payload: index });
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
