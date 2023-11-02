import "./App.css"
import { useState } from "react";

function App() {

  // const [quizData, setQuizData] = useState([{
  //   question: "What is React?",
  //   answer: "frame work",
  //   options: ["language", "translator", "frame work", "none of these"]
  // },
  // {
  //   question: "What is JS?",
  //   answer: "language",
  //   options: ["language", "translator", "frame work", "none of these"]
  // },
  // {
  //   question: "What is interprter?",
  //   answer: "translator",
  //   options: ["language", "translator", "frame work", "none of these"]
  // }
  // ]
  // )

  const [count, setCount] = useState(0)
  // console.log("count ===> ", count);
  const [score, setScore] = useState(0)
  // console.log("before updation =====> ", score);
  const quizData = [{
    question: "What is React?",
    answer: "frame work",
    options: ["language", "translator", "frame work", "none of these"]
  },
  {
    question: "What is JS?",
    answer: "language",
    options: ["language", "translator", "frame work", "none of these"]
  },
  {
    question: "What is interpreter?",
    answer: "translator",
    options: ["language", "translator", "frame work", "none of these"]
  }
  ]

  const next = (userAns) => {
    // console.log("nex okay👍");
    // console.log(userAns);
    // console.log(quizData[count].answer);
    // count < quizData.length ? console.log("less than length", count, " < ", quizData.length) : console.log("LENGTH ERROR ");
    // console.log(count);
    setCount(prev => prev + 1)
    console.log("after increment =======>", count);
    userAns === quizData[count].answer && setScore(prev => prev + 1)
    console.log(score);
    // userAns === quizData[count].answer && console.log("tick");


    // if (quizData[count].answer === userAns) {
    //   // console.log("correct");
    //   setScore(prev => prev + 1)
    //   console.log("after updation =====> ", count);
    //   setCount(prev => prev + 1)
    // }
  }
  // console.log("after increment =======>", count);
  console.log("after increment =======>", score);

  return (
    <div className="App">

      {count < quizData.length ?
        <div>
          <div className="quiz-heading">
            <h1>QUIZ APP</h1>
          </div>
          <div className="question-no">
            <h3>Question no. {count + 1}/3</h3>
          </div>
          <div>
            <h3>{quizData[count].question}</h3>
          </div>
          <div className="btns">
            {quizData[count].options.map((e, i) => <button onClick={() => next(e)} key={i}>{e}</button>)}
          </div>
        </div> :
        <div className="quiz-end">
          <h1>Quiz End</h1>
          <h1>Score: {score} / {quizData.length}</h1>
        </div>
      }
    </div>
  );
}

export default App;
