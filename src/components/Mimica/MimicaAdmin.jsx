import React, { useState } from 'react';
import { Plus, Trash2, ChevronUp, ChevronDown, Type } from 'lucide-react';

const MimicaAdmin = ({ words, setWords }) => {
    const [newWord, setNewWord] = useState('');

    const addWord = () => {
        if (newWord && !words.includes(newWord)) {
            setWords([...words, newWord]);
            setNewWord('');
        }
    };

    const removeWord = (index) => {
        const newWords = [...words];
        newWords.splice(index, 1);
        setWords(newWords);
    };

    const moveWord = (index, direction) => {
        const newWords = [...words];
        const targetIndex = index + direction;
        if (targetIndex >= 0 && targetIndex < words.length) {
            [newWords[index], newWords[targetIndex]] = [newWords[targetIndex], newWords[index]];
            setWords(newWords);
        }
    };

    return (
        <div className="mimica-admin">
            <div className="card">
                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Type size={20} color="var(--primary)" /> Gestionar Paraules Mímica
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
                <div className="edit-list">
                    {words.map((word, i) => (
                        <div key={i} className="item-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', marginBottom: '0.5rem' }}>
                            <span style={{ fontWeight: 600 }}>{word}</span>
                            <div style={{ display: 'flex', gap: '0.25rem' }}>
                                <button className="btn btn-ghost" onClick={() => moveWord(i, -1)} disabled={i === 0} style={{ padding: '4px' }}>
                                    <ChevronUp size={20} />
                                </button>
                                <button className="btn btn-ghost" onClick={() => moveWord(i, 1)} disabled={i === words.length - 1} style={{ padding: '4px' }}>
                                    <ChevronDown size={20} />
                                </button>
                                <button className="btn btn-ghost" onClick={() => removeWord(i)} style={{ color: 'var(--danger)', padding: '4px' }}>
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MimicaAdmin;
