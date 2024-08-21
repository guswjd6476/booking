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
        return <Recommendation answers={answers} />;
    }

    const question = questions[currentQuestion];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-4">
            <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg mx-4 md:mx-8">
                <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">{question.question}</h1>
                <ul className="space-y-4">
                    {question.options.map((option, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleAnswer(option)}
                                className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform transform hover:scale-105"
                            >
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
