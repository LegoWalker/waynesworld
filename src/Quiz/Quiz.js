import React, { useState } from 'react';
import './Quiz.css'

export default function Quiz() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
                { answerText: 'Brisbane', isCorrect: false }
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
        {
			questionText: "Which country's rugby team is called the 'All Blacks'?",
			answerOptions: [
				{ answerText: 'South Africa', isCorrect: false },
				{ answerText: 'Australia', isCorrect: false },
				{ answerText: 'New Zealand', isCorrect: true },
				{ answerText: 'Argentina', isCorrect: false },
                { answerText: 'Kenya', isCorrect: false },
			],
		},
	];

    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => { 
        if (isCorrect === true) {
            //alert("That is correct!");
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
            //alert("You have completed the quiz!");
        }
    }

    const handleStartButtonClick = () => {
        setShowScore(false);
        setScore(0);
        setCurrentQuestion(0);
    }

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);

	return (
        <div className='quizbody'>
            <div className='app'>
                {/* HINT: replace "false" with logic to display the 
                            score when the user has answered all the questions */}
                {showScore ? (
                    <div className='score-section'>
                         <br/>
                        <div>You scored {score} out of {questions.length}</div>
                        <br/>
                        <button onClick={handleStartButtonClick} className='quizbutton'>Start Again</button>
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} className='quizbutton'>{answerOption.answerText}</button>
                            ))}                                                   
                        </div>
                    </>
                )}
            </div>
        </div>
	);
}