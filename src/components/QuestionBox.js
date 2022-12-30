import React, { useEffect, useState } from "react";
import questions from "../questions";
import Result from "./Result";
function QuestionBox() {
  const [count, setcount] = useState(0);
  const [score, setscore] = useState(0);
  const [color, setcolor] = useState("wheat");
  const [butcol, setbutcol] = useState("black");
  const[text,settext]= useState('DARK')

  const reset = () => {
    if (count >= 0) {
      setcount(0);
      setscore(0);
    }
  };

  const changeColor = () => {
    if (color === "wheat") {
      setcolor('grey')
      settext('LIGHT')
    }
    else{
      setcolor('wheat')
      settext('DARK')
    }
  };

  

  const checkScore = (e) => {
    if (e === true) {
      setscore((e) => e + 1);
      setcount((e) => e + 1);
    } else {
      setcount((e) => e + 1);
    }
  };
  if (count <= 4) {
    return (
      <div style={{ backgroundColor: `${color}`, height: "100vh" }}>
        <h1>WELCOME TO THE QUIZ</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "5vw",
            marginRight: "5vw",
          }}
        >
          <h2>CHIRAG'S QUIZ</h2>
          <button
            className="dark"
            onClick={() =>changeColor()}
            
          >
            {text}
          </button>
        </div>
        <div>
          <h4>Question:{count + 1}</h4>
          <h1 style={{ color: `${butcol}` }}>{questions[count].text}</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "5vw",
              marginRight: "5vw",
            }}
          >
            <button
              style={{
                borderRadius: "100px",
                border: "none",
                marginBottom: "8px",
                padding: "15px",
                fontWeight: "900",
                fontSize: "15px",
              }}
              onClick={() => {
                checkScore(questions[count].options[0].isCorrect);
              }}
            >
              OPTION A - {questions[count].options[0].text}
            </button>
            <button
              style={{
                borderRadius: "100px",
                border: "none",
                marginBottom: "8px",
                padding: "15px",
                fontWeight: "900",
                fontSize: "15px",
              }}
              onClick={() => {
                checkScore(questions[count].options[1].isCorrect);
              }}
            >
              OPTION B - {questions[count].options[1].text}
            </button>

            <button
              style={{
                borderRadius: "100px",
                border: "none",
                marginBottom: "8px",
                padding: "15px",
                fontWeight: "900",
                fontSize: "15px",
              }}
              onClick={() => {
                checkScore(questions[count].options[2].isCorrect);
              }}
            >
              OPTION C - {questions[count].options[2].text}
            </button>
            <button
              style={{
                borderRadius: "100px",
                border: "none",
                marginBottom: "8px",
                padding: "15px",
                fontWeight: "900",
                fontSize: "15px",
              }}
              onClick={() => {
                checkScore(questions[count].options[3].isCorrect);
              }}
            >
              OPTION D - {questions[count].options[3].text}
            </button>
          </div>
          <br></br>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              onClick={() => {
                setbutcol("red");
              }}
            >
              Highlight
            </button>
            <button
              onClick={() => {
                setbutcol("black");
              }}
            >
              Remove
            </button>
            <button onClick={() => reset()}>RESET </button>
          </div>
          <p>score:{score}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Result apple={score} />
      </div>
      
    );
  }
}

export default QuestionBox;

