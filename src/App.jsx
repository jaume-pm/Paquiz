import React, { useState } from 'react';
import { Trophy, Settings, Eye, Info, Users, Ghost, Mic } from 'lucide-react';
import { initialQuestions } from './data/initialQuestions';
import { initialParticipants, initialImpostorWords } from './data/impostorInitialData';
import { initialMimicaWords } from './data/mimicaInitialData';
import { useLocalStorage } from './hooks/useLocalStorage';
import TriviaView from './components/Trivia/TriviaView';
import TriviaEdit from './components/Trivia/TriviaEdit';
import ImpostorGame from './components/Impostor/ImpostorGame';
import ImpostorAdmin from './components/Impostor/ImpostorAdmin';
import MimicaGame from './components/Mimica/MimicaGame';
import MimicaAdmin from './components/Mimica/MimicaAdmin';

function App() {
    const [activeLevel, setActiveLevel] = useState(1);
    const [isAdminMode, setIsAdminMode] = useState(false);

    // Level 1 State
    const [questions, setQuestions] = useLocalStorage('paquiz-questions', initialQuestions);

    // Level 2 State
    const [participants, setParticipants] = useLocalStorage('paquiz-participants', initialParticipants);
    const [impostorWords, setImpostorWords] = useLocalStorage('paquiz-words', initialImpostorWords);
    const [drawCount, setDrawCount] = useLocalStorage('paquiz-draw-count', 5);

    // Level 3 State
    const [mimicaWords, setMimicaWords] = useLocalStorage('paquiz-mimica-words', initialMimicaWords);

    const renderLevelContent = () => {
        switch (activeLevel) {
            case 1:
                return isAdminMode ? (
                    <TriviaEdit questions={questions} setQuestions={setQuestions} />
                ) : (
                    <TriviaView questions={questions} />
                );
            case 2:
                return isAdminMode ? (
                    <ImpostorAdmin
                        participants={participants}
                        setParticipants={setParticipants}
                        words={impostorWords}
                        setWords={setImpostorWords}
                        drawCount={drawCount}
                        setDrawCount={setDrawCount}
                    />
                ) : (
                    <ImpostorGame
                        participants={participants}
                        words={impostorWords}
                        drawCount={drawCount}
                    />
                );
            case 3:
                return isAdminMode ? (
                    <MimicaAdmin words={mimicaWords} setWords={setMimicaWords} />
                ) : (
                    <MimicaGame words={mimicaWords} />
                );
            default:
                return null;
        }
    };

    const getLevelIcon = (level) => {
        switch (level) {
            case 1: return <Trophy size={14} />;
            case 2: return <Ghost size={14} />;
            case 3: return <Mic size={14} />;
            default: return null;
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
                {[1, 2, 3].map((num) => (
                    <button
                        key={num}
                        className={`level-tab ${activeLevel === num ? 'active' : ''}`}
                        onClick={() => {
                            setActiveLevel(num);
                            setIsAdminMode(false); // Reset admin mode when switching levels
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                            {getLevelIcon(num)}
                            Nivell {num}
                        </div>
                    </button>
                ))}
            </nav>

            <main>
                {renderLevelContent()}
            </main>

            {(activeLevel >= 1 && activeLevel <= 3) && (
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
