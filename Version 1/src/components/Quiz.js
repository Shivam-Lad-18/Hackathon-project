import React, { useState, useEffect } from "react";
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult";
import { Solution } from "../Data/Solution";
import "./Quiz.css"

function Quiz() {
  const [quote, setQuote] = useState("");

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
      });
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedOption, setClickedOption] = useState();
  const [showResult, setShowResult] = useState(false);
  const [sol, setsol] = useState([]);
  // const [Answers, setAnswers] = useState([]);

  const changeQuestion = () => {
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption();
    } else {
      setShowResult(true);
    }
  };
  const storeans = () => {
    fetchNewQuote();

    let c = 0;
    for (let i = 0; i < Solution[currentQuestion].rightoptions.length; i++) {
      if (clickedOption == Solution[currentQuestion].rightoptions[i]) {
        c++;
      }
    }
    if (c >= 1) {
      sol.push(Solution[currentQuestion].solution);
      c = 0;
      console.log(sol);
    }

    console.log(clickedOption);
    // Answers.push(clickedOption);
    // console.log(Answers);
    changeQuestion();
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption("");
    setsol([]);
  };
  return (
    <div>
      
      
      <div className="box">
          {showResult ? (
            <QuizResult sol={sol} tryAgain={resetAll} />
          ) : (
            <>
        <div className="container">
              <div className="question">
                <span id="question-txt">
                  {QuizData[currentQuestion].question}
                </span>
              </div>
              <div className="option-container">
                {QuizData[currentQuestion].options.map((option, i) => {
                  return (
                    <button
                      className="option-btn"
                      key={i}
                      onClick={() => {
                        setClickedOption(QuizData[currentQuestion].options[i]);
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              <input
                type="button"
                value="Next"
                id="next-button"
                onClick={storeans}
              />
        </div>
        <div className="quotebox">
          <div className="quotediv">
            <h2>{quote}</h2>
          </div>
        </div>
            </>
          )}
      </div>
    </div>
  );
}

export default Quiz;
