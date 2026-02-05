import React, { useEffect, useMemo, useState } from 'react';
import api from '../api/axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<{ _id: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const { logout, user } = useAuth();

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const taskCount = useMemo(() => tasks.length, [tasks]);

  return (
    <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-8">
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/30 via-blue-500/20 to-sky-500/20 p-8 shadow-2xl shadow-blue-900/40 backdrop-blur">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-blue-100/70">Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Hello, {user?.name ?? 'there'} 👋</h1>
            <p className="mt-3 max-w-lg text-sm text-blue-100/80">
              Keep momentum going—add new tasks, check off wins, and stay organised within this calm blue command centre.
            </p>
          </div>
          <button
            onClick={logout}
            className="inline-flex items-center justify-center rounded-xl border border-blue-200/40 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-100 transition hover:border-blue-200/80 hover:bg-blue-500/20 hover:text-white"
          >
            Log out
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-blue-100/80">
            <p className="text-xs uppercase tracking-wider text-blue-200/70">Total tasks</p>
            <p className="mt-1 text-2xl font-semibold text-white">{taskCount}</p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-blue-900/30 backdrop-blur">
        <div className="border-b border-white/5 px-6 py-5">
          <h2 className="text-lg font-semibold text-white">Add a new task</h2>
          <p className="mt-1 text-sm text-blue-100/70">Capture what needs your attention next.</p>
        </div>
        <div className="px-6 py-6">
          <TaskForm onCreated={fetch} />
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-blue-900/30 backdrop-blur">
        <div className="border-b border-white/5 px-6 py-5">
          <h2 className="text-lg font-semibold text-white">Your tasks</h2>
          <p className="mt-1 text-sm text-blue-100/70">Stay consistent by working through these one at a time.</p>
        </div>
        <div className="px-6 py-6">
          {loading ? (
            <div className="flex items-center gap-3 rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-5 text-sm text-blue-100/80">
              <span className="inline-block h-3 w-3 animate-ping rounded-full bg-blue-300" />
              Fetching your to-dos...
            </div>
          ) : (
            <TaskList tasks={tasks} onRefresh={fetch} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
