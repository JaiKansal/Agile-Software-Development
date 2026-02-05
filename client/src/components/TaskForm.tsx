import React, { useState } from 'react';
import api from '../api/axios';

const TaskForm: React.FC<{ onCreated: () => void }> = ({ onCreated }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    try {
      await api.post('/tasks', { text: text.trim() });
      setText('');
      onCreated();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
      <input
        className="flex-1 bg-slate-950/70"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add something meaningful..."
        aria-label="Task description"
      />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center bg-gradient-to-r from-blue-500 via-sky-500 to-blue-400 px-6 py-3 text-sm text-slate-950 shadow-lg shadow-blue-900/40 transition hover:from-blue-400 hover:via-sky-400 hover:to-blue-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {loading ? 'Adding...' : 'Add task'}
      </button>
    </form>
  );
};

export default TaskForm;
