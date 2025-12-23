import React, { useState } from 'react';
import { ChevronRight, RotateCcw, Ghost } from 'lucide-react';

const MimicaGame = ({ words }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!words || words.length === 0) {
        return (
            <div className="empty-state">
                <p>No hi ha paraules per a la mímica.</p>
            </div>
        );
    }

    const currentWord = words[currentIndex];

    const handleNext = () => {
        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    return (
        <div className="mimica-container">
            <div className="card trivia-card" style={{ backgroundColor: '#fffbe6', border: '2px solid var(--secondary)' }}>
                <div className="progress-indicator">
                    {currentIndex + 1} / {words.length}
                </div>

                <div className="question-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                    {currentWord}
                </div>

                <div className="info-box" style={{ background: '#fff', padding: '1rem', borderRadius: '12px', marginBottom: '2rem', fontSize: '0.9rem', color: '#666' }}>
                    <Ghost size={20} style={{ margin: '0 auto 0.5rem', display: 'block' }} />
                    <p><strong>Rubén</strong>, ara et toca a tu!</p>
                    <p>Fes mímica o sons per explicar aquesta paraula.</p>
                </div>

                <button className="btn btn-primary" onClick={handleNext}>
                    {currentIndex < words.length - 1 ? 'Següent Paraula' : 'Tornar al principi'}
                    <ChevronRight size={20} />
                </button>
            </div>

            {currentIndex > 0 && (
                <button className="btn btn-ghost" onClick={() => setCurrentIndex(0)} style={{ margin: '0 auto' }}>
                    <RotateCcw size={16} /> Reiniciar
                </button>
            )}
        </div>
    );
};

export default MimicaGame;
