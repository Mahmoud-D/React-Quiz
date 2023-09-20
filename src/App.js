import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Header.js";
import Main from "./Main";

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'complete'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "failed",
      };
    default:
      throw new Error(" Unknown action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch("http://localhost:8000/questions").then((res) =>
      res
        .json()
        .then((data) => dispatch({ type: "dataReceived", payload: data }))
        .catch((err) => dispatch({ type: "dataFailed" }))
    );
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Qestion</p>
      </Main>
    </div>
  );
}

export default App;
