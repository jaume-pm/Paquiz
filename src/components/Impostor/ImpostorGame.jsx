import React, { useState } from 'react';
import { Shuffle, Eye, EyeOff, User, Ghost } from 'lucide-react';

const ImpostorGame = ({ participants, words, drawCount }) => {
    const [selectedParticipants, setSelectedParticipants] = useState([]);
    const [wordIndex, setWordIndex] = useState(0);
    const [showWord, setShowWord] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const startNewRound = () => {
        if (participants.length < drawCount) {
            alert(`Necessites almenys ${drawCount} participants per jugar.`);
            return;
        }

        // 1. SELECT PARTICIPANTS RANDOMLY (as requested)
        const shuffled = [...participants].sort(() => 0.5 - Math.random());
        setSelectedParticipants(shuffled.slice(0, drawCount));

        // 2. SELECT WORD SEQUENTIALLY (as requested)
        // The current word is words[wordIndex]
        // Then we increment wordIndex for the NEXT round

        setShowWord(false);
        setGameStarted(true);
    };

    const handleNextRound = () => {
        // Increment word index and start new round
        const nextIdx = (wordIndex + 1) % words.length;
        setWordIndex(nextIdx);

        // We need to call the round logic with the NEW index
        // Let's refactor slightly to pass the word
        const shuffled = [...participants].sort(() => 0.5 - Math.random());
        setSelectedParticipants(shuffled.slice(0, drawCount));
        setShowWord(false);
    };

    const currentWord = words[wordIndex] || '---';

    return (
        <div className="impostor-container">
            {!gameStarted ? (
                <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
                    <Ghost size={64} color="var(--primary)" style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
                    <h2 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>L'Impostor</h2>
                    <p style={{ marginBottom: '2rem', color: '#666' }}>
                        Rubén és l'impostor. Seleccionarem {drawCount} persones aleatòriament que veuran una paraula secreta.
                        <strong></strong>
                    </p>
                    <button className="btn btn-primary" onClick={startNewRound}>
                        Començar Ronda
                        <Shuffle size={20} />
                    </button>
                </div>
            ) : (
                <div className="game-view">
                    <div className="card" style={{ border: '2px solid var(--primary)' }}>
                        <div className="progress-indicator" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                            Paraula {wordIndex + 1} / {words.length}
                        </div>

                        <h3 style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.1rem' }}>
                            Participants d'aquesta ronda:
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                            {selectedParticipants.map((name, i) => (
                                <div key={i} className="item-card" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem' }}>
                                    <User size={16} color="var(--primary)" />
                                    <span style={{ fontWeight: 600 }}>{name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="impostor-reveal" style={{ textAlign: 'center', background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px' }}>
                            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#666', marginBottom: '1rem' }}>
                                L'impostor és: <span style={{ color: 'var(--danger)', fontWeight: 800 }}>Rubén</span>
                            </p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Paraula Secreta:</p>
                                <div className="word-box" style={{
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: 800,
                                    color: 'var(--primary)',
                                    backgroundColor: showWord ? 'var(--secondary)' : '#dee2e6',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s'
                                }}>
                                    {showWord ? currentWord : '••••••••'}
                                </div>
                            </div>

                            <button
                                className={`btn ${showWord ? 'btn-secondary' : 'btn-primary'}`}
                                onClick={() => setShowWord(!showWord)}
                            >
                                {showWord ? <><EyeOff size={18} /> Amagar</> : <><Eye size={18} /> Revelar Paraula</>}
                            </button>
                        </div>
                    </div>

                    <button className="btn btn-primary" onClick={handleNextRound} style={{ marginTop: '1rem' }}>
                        <Shuffle size={18} /> Següent Ronda
                    </button>

                    <button className="btn btn-ghost" onClick={() => setWordIndex(0)}>
                        Reiniciar ordre paraules
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImpostorGame;
