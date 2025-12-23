import React, { useState } from 'react';
import { ChevronRight, RotateCcw } from 'lucide-react';

const TriviaView = ({ questions }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!questions || questions.length === 0) {
        return (
            <div className="empty-state">
                <p>No hi ha preguntes disponibles.</p>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handleReset = () => {
        setCurrentIndex(0);
    };

    return (
        <div className="trivia-container">
            <div className="card trivia-card">
                <div className="progress-indicator">
                    {currentIndex + 1} / {questions.length}
                </div>

                <div className="question-text">
                    {currentQuestion.question}
                </div>

                <div className="answer-section">
                    <div className="answer-badge">Resposta</div>
                    <div className="answer-text">
                        {currentQuestion.answer}
                    </div>
                </div>

                <button className="btn btn-primary" onClick={handleNext}>
                    {currentIndex < questions.length - 1 ? 'Següent Pregunta' : 'Tornar al principi'}
                    <ChevronRight size={20} />
                </button>
            </div>

            {currentIndex > 0 && (
                <button className="btn btn-ghost" onClick={handleReset} style={{ margin: '0 auto' }}>
                    <RotateCcw size={16} /> Reiniciar
                </button>
            )}
        </div>
    );
};

export default TriviaView;
