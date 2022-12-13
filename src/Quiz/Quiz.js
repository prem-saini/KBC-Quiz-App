import React, { useState, useEffect } from "react";
import "./Quiz.css"

function Quiz({ data, setStop, setQuestionNumber, questionNumber }) {
    const [question, setQuestion] = useState(null);
    const [selectedanswer, setSelectdanswer] = useState(null)
    const [classname, setClassname] = useState("answer")

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber])
    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration)

    }

    const onHandle = (a) => {
        setSelectdanswer(a)
        setClassname("answer active")
        delay(3000, () => setClassname(a.correct ? "answer correct" : "answer wrong")
        );
        delay(6000, () => {
            if (a.correct) {
                setQuestionNumber((prev) => prev + 1)
                setSelectdanswer(null);
            }
            else {
                setStop(true)
            }
        })
    }
    return (
        <>
            <div className="quiz">
                <div className="question">{question?.question}</div>
                <div className="answers">
                    {question?.answers.map((a) =>
                        <div className={selectedanswer === a ? classname : "answer"} onClick={() => onHandle(a)}>{a.text}</div>
                    )}


                </div>
            </div>
        </>
    )
}
export default Quiz