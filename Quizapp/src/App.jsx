import { useState, useContext } from "react";
import "./App.css";
import QuestionBox from "./Components/quizbox";
import { AppContext } from "./Components/context";
import Questions from "./resources/questionData";
import Result from "./Components/scorePage";

function App() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const { isCorrect, setIsCorrect } = useContext(AppContext);
  const [currPage, setCurrPage] = useState("quizpage");

  const quiz = () => {
    setCurrQuestion(0);
    setIsCorrect(0);
    setCurrPage("quizpage"); 
  };

  let result = (i, option) => {
    if (currQuestion === 9) {
      setCurrPage("result");
    } else {
      if (option === Questions[i].answer) {
        setIsCorrect((prev) => prev + 1);
      }
      setCurrQuestion((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      {currPage === "result" && <Result QuizPage={quiz} />}
      {currPage === "quizpage" && (
        <QuestionBox resultPage={result} i={currQuestion} />
      )}
    </>
  );
}

export default App;
