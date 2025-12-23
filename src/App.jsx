import React, { useState } from 'react';
import { Trophy, Settings, Eye, Info } from 'lucide-react';
import { initialQuestions } from './data/initialQuestions';
import { useLocalStorage } from './hooks/useLocalStorage';
import TriviaView from './components/Trivia/TriviaView';
import TriviaEdit from './components/Trivia/TriviaEdit';

function App() {
    const [activeLevel, setActiveLevel] = useState(1);
    const [isAdminMode, setIsAdminMode] = useState(false);
    const [questions, setQuestions] = useLocalStorage('paquiz-questions', initialQuestions);

    const renderLevelContent = () => {
        switch (activeLevel) {
            case 1:
                return isAdminMode ? (
                    <TriviaEdit questions={questions} setQuestions={setQuestions} />
                ) : (
                    <TriviaView questions={questions} />
                );
            case 2:
                return (
                    <div className="empty-state">
                        <Info size={48} style={{ marginBottom: '1rem', opacity: 0.2 }} />
                        <h3>Nivell 2</h3>
                        <p>Properament disponible...</p>
                    </div>
                );
            case 3:
                return (
                    <div className="empty-state">
                        <Info size={48} style={{ marginBottom: '1rem', opacity: 0.2 }} />
                        <h3>Nivell 3</h3>
                        <p>Properament disponible...</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="app-container">
            <header>
                <div className="logo-container">
                    <Trophy className="logo-icon" />
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>PAQUIZ</h1>
                </div>
            </header>

            <nav className="level-selector">
                <button
                    className={`level-tab ${activeLevel === 1 ? 'active' : ''}`}
                    onClick={() => setActiveLevel(1)}
                >
                    Nivell 1
                </button>
                <button
                    className={`level-tab ${activeLevel === 2 ? 'active' : ''}`}
                    onClick={() => setActiveLevel(2)}
                >
                    Nivell 2
                </button>
                <button
                    className={`level-tab ${activeLevel === 3 ? 'active' : ''}`}
                    onClick={() => setActiveLevel(3)}
                >
                    Nivell 3
                </button>
            </nav>

            <main>
                {renderLevelContent()}
            </main>

            {activeLevel === 1 && (
                <div className="admin-mode-toggle">
                    <button
                        className="btn btn-secondary"
                        onClick={() => setIsAdminMode(!isAdminMode)}
                        style={{ width: 'auto' }}
                    >
                        {isAdminMode ? (
                            <><Eye size={18} /> Mode Vista</>
                        ) : (
                            <><Settings size={18} /> Mode Edició</>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
