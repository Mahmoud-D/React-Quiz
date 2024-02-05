import Options from "./Options";

function Question({ Question, dispatch, answer }) {
  console.log(Question);
  return (
    <div>
      <h2>{Question.question}</h2>

      <Options Question={Question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
