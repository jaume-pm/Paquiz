import React, { useState } from 'react';
import { Plus, Trash2, Users, Type, Hash, ChevronUp, ChevronDown } from 'lucide-react';

const ImpostorAdmin = ({
    participants, setParticipants,
    words, setWords,
    drawCount, setDrawCount
}) => {
    const [newParticipant, setNewParticipant] = useState('');
    const [newWord, setNewWord] = useState('');

    const addParticipant = () => {
        if (newParticipant && !participants.includes(newParticipant)) {
            setParticipants([...participants, newParticipant]);
            setNewParticipant('');
        }
    };

    const removeParticipant = (name) => {
        setParticipants(participants.filter(p => p !== name));
    };

    const moveParticipant = (index, direction) => {
        const newList = [...participants];
        const targetIndex = index + direction;
        if (targetIndex >= 0 && targetIndex < participants.length) {
            [newList[index], newList[targetIndex]] = [newList[targetIndex], newList[index]];
            setParticipants(newList);
        }
    };

    const addWord = () => {
        if (newWord && !words.includes(newWord)) {
            setWords([...words, newWord]);
            setNewWord('');
        }
    };

    const removeWord = (index) => {
        const newList = [...words];
        newList.splice(index, 1);
        setWords(newList);
    };

    const moveWord = (index, direction) => {
        const newList = [...words];
        const targetIndex = index + direction;
        if (targetIndex >= 0 && targetIndex < words.length) {
            [newList[index], newList[targetIndex]] = [newList[targetIndex], newList[index]];
            setWords(newList);
        }
    };

    return (
        <div className="impostor-admin">
            <div className="card">
                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Hash size={20} color="var(--primary)" /> Configuració
                </h3>
                <div className="input-group">
                    <label className="input-label">Nre. persones a triar ({drawCount})</label>
                    <input
                        type="range"
                        min="2"
                        max={participants.length}
                        value={drawCount}
                        onChange={(e) => setDrawCount(parseInt(e.target.value))}
                        style={{ padding: 0 }}
                    />
                </div>
            </div>

            <div className="card">
                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={20} color="var(--primary)" /> Participants
                </h3>
                <div className="input-group" style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                        value={newParticipant}
                        onChange={(e) => setNewParticipant(e.target.value)}
                        placeholder="Nom del participant..."
                    />
                    <button className="btn btn-primary" onClick={addParticipant} style={{ width: 'auto' }}>
                        <Plus size={20} />
                    </button>
                </div>
                <div className="edit-list" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                    {participants.map((name, i) => (
                        <div key={i} className="item-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', marginBottom: '0.5rem' }}>
                            <span>{name}</span>
                            <div style={{ display: 'flex', gap: '0.25rem' }}>
                                <button className="btn btn-ghost" onClick={() => moveParticipant(i, -1)} disabled={i === 0} style={{ padding: '2px' }}>
                                    <ChevronUp size={18} />
                                </button>
                                <button className="btn btn-ghost" onClick={() => moveParticipant(i, 1)} disabled={i === participants.length - 1} style={{ padding: '2px' }}>
                                    <ChevronDown size={18} />
                                </button>
                                <button className="btn btn-ghost" onClick={() => removeParticipant(name)} style={{ color: 'var(--danger)', padding: '2px' }}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card">
                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Type size={20} color="var(--primary)" /> Paraules Secretes
                </h3>
                <div className="input-group" style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                        value={newWord}
                        onChange={(e) => setNewWord(e.target.value)}
                        placeholder="Nova paraula..."
                    />
                    <button className="btn btn-primary" onClick={addWord} style={{ width: 'auto' }}>
                        <Plus size={20} />
                    </button>
                </div>
                <div className="edit-list" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                    {words.map((word, i) => (
                        <div key={i} className="item-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', marginBottom: '0.5rem' }}>
                            <span>{word}</span>
                            <div style={{ display: 'flex', gap: '0.25rem' }}>
                                <button className="btn btn-ghost" onClick={() => moveWord(i, -1)} disabled={i === 0} style={{ padding: '2px' }}>
                                    <ChevronUp size={18} />
                                </button>
                                <button className="btn btn-ghost" onClick={() => moveWord(i, 1)} disabled={i === words.length - 1} style={{ padding: '2px' }}>
                                    <ChevronDown size={18} />
                                </button>
                                <button className="btn btn-ghost" onClick={() => removeWord(i)} style={{ color: 'var(--danger)', padding: '2px' }}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImpostorAdmin;
