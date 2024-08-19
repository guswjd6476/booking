import { useState } from 'react';
import Recommendation from './components/Recommendation';
import { questions } from './api/data/data';

const Home = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);

    const handleAnswer = (answer: string) => {
        setAnswers([...answers, answer]);
        setCurrentQuestion(currentQuestion + 1);
    };

    if (currentQuestion >= questions.length) {
        return <Recommendation />;
    }

    const question = questions[currentQuestion];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{question.question}</h1>
            <ul>
                {question.options.map((option, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleAnswer(option)}
                            className="block w-full p-2 mb-2 bg-blue-500 text-white rounded"
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
