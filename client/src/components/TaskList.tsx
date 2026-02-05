import React from 'react';
import api from '../api/axios';

type Task = { _id: string; text: string };

const TaskList: React.FC<{ tasks: Task[]; onRefresh: () => void }> = ({ tasks, onRefresh }) => {
  const remove = async (id: string) => {
    try {
      await api.delete(`/tasks/${id}`);
      onRefresh();
    } catch (err) {
      console.error(err);
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-blue-300/50 bg-blue-500/10 px-6 py-10 text-center text-sm text-blue-100/70">
        Nothing here yet. Add your first task and watch your list come alive.
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task._id}
          className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 shadow-sm shadow-slate-950/40 transition hover:border-blue-400/40 hover:bg-slate-950/60"
        >
          <span className="text-sm font-medium text-slate-100">{task.text}</span>
          <button
            type="button"
            onClick={() => remove(task._id)}
            className="text-xs font-semibold uppercase tracking-wide text-blue-200 transition hover:text-white"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
