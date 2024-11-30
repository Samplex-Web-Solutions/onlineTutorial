import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./quiz.css";
import "../pages/Dashboard.css";

const QuizComponent = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [selectedTag, setSelectedTag] = useState(null);
    const [showModal, setShowModal] = useState(false); // State for modal visibility

    const fetchQuizzes = async (tag) => {
        try {
            const response = await axios.get(
                "https://quizapi.io/api/v1/questions",
                {
                    params: {
                        limit: 10, // Number of questions
                        category: "code", // Programming-related questions
                        tags: tag, // Filter dynamically based on selected tag
                    },
                    headers: {
                        "X-Api-Key": "aAVlDvzF5geSxZHN2nV3bo04idbEO3iXwVfDe9WJ",
                    },
                }
            );
            setQuizzes(response.data);
            setSelectedTag(tag);
            setCurrentQuestionIndex(0);
            setScore(0);
            setIsQuizCompleted(false);
        } catch (error) {
            console.error("Error fetching quizzes:", error);
        }
    };

    const handleNextQuestion = () => {
        if (selectedAnswer) {
            if (quizzes[currentQuestionIndex].correct_answers[`${selectedAnswer}_correct`] === "true") {
                setScore(score + 1);
            }

            if (currentQuestionIndex + 1 < quizzes.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAnswer(null);
            } else {
                setIsQuizCompleted(true);
            }
        } else {
            setShowModal(true); // Show modal when no answer is selected
        }
    };

    const closeModal = () => {
        setShowModal(false); // Close the modal
    };

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsQuizCompleted(false);
    };

    return (
        <div className="quiz-controller">
            <div className="quiz-container">
                {selectedTag === null ? (
                    <div className="test-selection">
                        <h1>Select Language Test</h1>
                        <button onClick={() => fetchQuizzes("HTML")} className="test-button">
                            HTML Test
                        </button>
                        <button onClick={() => fetchQuizzes("JavaScript")} className="test-button">
                            JavaScript Test
                        </button>
                        <button onClick={() => fetchQuizzes("CSS")} className="test-button">
                            CSS Test
                        </button>
                        <button onClick={() => fetchQuizzes("Python")} className="test-button">
                            Python Test
                        </button>
                        <button onClick={() => fetchQuizzes("C++")} className="test-button">
                            C++ Test
                        </button>
                        <button onClick={() => fetchQuizzes("C")} className="test-button">
                            C Test
                        </button>
                    </div>
                ) : !isQuizCompleted ? (
                    <>
                        <div className="wrapper">
                        <h1>Question {currentQuestionIndex + 1}</h1>
                        <h2>{quizzes[currentQuestionIndex]?.question}</h2>
                        <ul>
                            {Object.entries(quizzes[currentQuestionIndex]?.answers || {}).map(
                                ([key, value]) =>
                                    value && (
                                        <div className="quiz-list" key={key}>
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="answer"
                                                        value={key}
                                                        checked={selectedAnswer === key}
                                                        onChange={() => setSelectedAnswer(key)}
                                                    />
                                                    {value}
                                                </label>
                                            </li>
                                        </div>
                                    )
                            )}
                        </ul>
                        <button onClick={handleNextQuestion} className="next-button">
                            {currentQuestionIndex + 1 < quizzes.length ? "Next" : "Finish"}
                        </button>
                        </div>
                    </>
                ) : (
                    <div className="result-container">
                        <h1>Quiz Completed!</h1>
                        <p>Your Score: {score} / {quizzes.length}</p>
                        <div className="action-buttons">
                            <button onClick={handleRestartQuiz} className="restart-button">
                                Restart Quiz
                            </button>
                            <button onClick={() => setSelectedTag(null)} className="dashboard-button">
                                Go Back to Test Selection
                            </button>
                            <Link to="/dashboard">
                                <button className="dashboard-button">
                                    Go to Dashboard
                                </button>
                            </Link>
                        </div>
                    </div>
                )}

                {/* Modal */}
                {showModal && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <h2>Action Required</h2>
                            <p>Please select an answer before proceeding.</p>
                            <button onClick={closeModal} className="modal-close-button">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizComponent;
