import React, { useState } from 'react';
import Recommendation from './Recommendation';
import { questions } from '../api/data/data';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);

    const handleAnswer = (answer: string) => {
        setAnswers([...answers, answer]);
        setCurrentQuestion(currentQuestion + 1);
    };

    if (currentQuestion >= questions.length) {
        return <Recommendation answers={answers} />;
    }

    const question = questions[currentQuestion];

    return (
        <div>
            <h1>{question.question}</h1>
            {question.options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Quiz;
