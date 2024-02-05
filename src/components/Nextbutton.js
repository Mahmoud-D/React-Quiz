export default function Nextbutton({ dispatch, answer, numOfQuestions }) {
  if (answer === null) return null;


// const next =  (answer < numOfQuestions - 1)
// const finish =(answer === numOfQuestions - 1)


  if (answer < numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );

  if (answer === numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "finish" });
        }}
      >
        Finish
      </button>
    );
}
