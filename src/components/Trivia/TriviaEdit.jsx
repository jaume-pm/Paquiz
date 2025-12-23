import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Check, X } from 'lucide-react';

const TriviaEdit = ({ questions, setQuestions }) => {
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({ question: '', answer: '' });
    const [isAdding, setIsAdding] = useState(false);

    const startEdit = (q) => {
        setEditingId(q.id);
        setEditForm({ question: q.question, answer: q.answer });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditForm({ question: '', answer: '' });
        setIsAdding(false);
    };

    const saveEdit = () => {
        if (!editForm.question || !editForm.answer) return;

        if (isAdding) {
            const newQuestion = {
                id: Date.now(),
                ...editForm
            };
            setQuestions([...questions, newQuestion]);
        } else {
            setQuestions(questions.map(q => q.id === editingId ? { ...q, ...editForm } : q));
        }
        cancelEdit();
    };

    const deleteQuestion = (id) => {
        if (confirm('Estàs segur que vols eliminar aquesta pregunta?')) {
            setQuestions(questions.filter(q => q.id !== id));
        }
    };

    return (
        <div className="edit-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>Gestionar Preguntes</h2>
                <button className="btn btn-secondary" onClick={() => setIsAdding(true)} disabled={isAdding || editingId}>
                    <Plus size={20} /> Afegir
                </button>
            </div>

            {(isAdding || editingId) && (
                <div className="card" style={{ border: '2px solid var(--secondary)' }}>
                    <div className="input-group">
                        <label className="input-label">Pregunta</label>
                        <textarea
                            value={editForm.question}
                            onChange={(e) => setEditForm({ ...editForm, question: e.target.value })}
                            placeholder="Escriu la pregunta aquí..."
                            rows={3}
                        />
                    </div>
                    <div className="input-group">
                        <label className="input-label">Resposta</label>
                        <textarea
                            value={editForm.answer}
                            onChange={(e) => setEditForm({ ...editForm, answer: e.target.value })}
                            placeholder="Escriu la resposta aquí..."
                            rows={2}
                        />
                    </div>
                    <div className="item-actions">
                        <button className="btn btn-ghost" onClick={cancelEdit}>
                            <X size={20} /> Cancel·lar
                        </button>
                        <button className="btn btn-primary" onClick={saveEdit} style={{ width: 'auto' }}>
                            <Check size={20} /> Desar
                        </button>
                    </div>
                </div>
            )}

            <div className="edit-list">
                {questions.map((q) => (
                    <div key={q.id} className="item-card">
                        <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{q.question}</div>
                        <div style={{ fontSize: '0.875rem', color: '#6c757d' }}>{q.answer}</div>
                        <div className="item-actions">
                            <button className="btn btn-ghost" onClick={() => startEdit(q)} disabled={isAdding || editingId}>
                                <Edit2 size={18} />
                            </button>
                            <button className="btn btn-ghost" onClick={() => deleteQuestion(q.id)} disabled={isAdding || editingId} style={{ color: 'var(--danger)' }}>
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TriviaEdit;
