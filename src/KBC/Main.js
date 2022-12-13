import React, { useState, useEffect, useMemo } from "react"
import Quiz from "../Quiz/Quiz"
import Timer from "../Timer/Timer"

import "./Main.css"
function Main() {
    const [questionNumber, setQuestionNumber] = useState(1)
    const [stop, setStop] = useState(false)
    const [earned, setEarned] = useState("$ 0")



    const data = [

        {
            id: 5,
            question: "Rolex is a company that specializes in what type of product?",
            answers: [
                {
                    text: "Phone",
                    correct: false,
                },
                {
                    text: "Watches",
                    correct: true,
                },
                {
                    text: "Food",
                    correct: false,
                },
                {
                    text: "Cosmetic",
                    correct: false,
                },
            ],
        },
        {
            id: 6,
            question: "When did the website `Facebook` launch?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },
        {
            id: 7,
            question: "Who played the character of harry potter in movie?",
            answers: [
                {
                    text: "Johnny Deep",
                    correct: false,
                },
                {
                    text: "Leonardo Di Caprio",
                    correct: false,
                },
                {
                    text: "Denzel Washington",
                    correct: false,
                },
                {
                    text: "Daniel Red Cliff",
                    correct: true,
                },
            ],
        },
    ]
    console.log(data)

    const moneypramid = useMemo(() =>
        [
            { id: 14, amount: "$ 300000" },
            { id: 13, amount: "$ 100000" },
            { id: 12, amount: "$ 75000" },
            { id: 11, amount: "$ 50000" },
            { id: 10, amount: "$ 25000" },
            { id: 9, amount: "$ 10000" },
            { id: 8, amount: "$ 5000" },
            { id: 7, amount: "$ 2500" },
            { id: 6, amount: "$ 1000" },
            { id: 5, amount: "$ 500" },
            { id: 4, amount: "$ 250" },
            { id: 3, amount: "$ 100" },
            { id: 2, amount: "$ 10" },
            { id: 1, amount: "$ 5" },
        ].reverse()
        , [])
    useEffect(() => {
        questionNumber > 1 &&
            setEarned(moneypramid.find((m) => m.id === questionNumber - 1).amount);
    }, [moneypramid, questionNumber])
    return (

        <div className="menu">
            <div className="left">
                {stop ?
                    (<h1 className="endText">You Earned: {earned}</h1>
                    ) : (
                        <>
                            <div className="top">
                                <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
                            </div>
                            <div className="bottom"><Quiz data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />

                            </div>

                        </>

                    )

                }

                <div className="right">

                    <ul className="moneylist">
                        {moneypramid.map((m) => (<li className={questionNumber === m.id ? "menu_listNumber active" : "menu_listNumber"}>
                            <span className="moneylist_number">{m.id}</span>
                            <span className="moneylist_amount">{m.amount}</span>

                        </li>))}



                    </ul>

                </div>
            </div>
        </div>

    )
}
export default Main