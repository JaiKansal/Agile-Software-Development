import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register: React.FC = () => {
  const { register, user } = useAuth();
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    const state = location.state as { message?: string; email?: string } | null;
    if (state?.message) {
      setInfo(state.message);
      if (state.email) setEmail(state.email);
      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await register(name, email, password);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  if (user) return <Navigate to="/dashboard" replace />;

  return (
    <div className="mx-auto mt-12 max-w-xl">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-blue-900/40 backdrop-blur">
        <div className="border-b border-white/5 bg-slate-900/60 px-8 py-6">
          <h2 className="text-3xl font-semibold text-white">Create your space</h2>
          <p className="mt-2 text-sm text-blue-100/70">Register to start tracking tasks with a serene blue workspace.</p>
        </div>

        {info && (
          <div className="border border-blue-400/40 bg-blue-500/10 px-8 py-4 text-sm text-blue-200">
            {info}
          </div>
        )}
        {error && (
          <div className="border border-red-400/40 bg-red-500/10 px-8 py-4 text-sm text-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 px-8 py-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-blue-100/90">
              Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="register-email" className="text-sm font-medium text-blue-100/90">
              Email address
            </label>
            <input
              id="register-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="register-password" className="text-sm font-medium text-blue-100/90">
              Password
            </label>
            <input
              id="register-password"
              type="password"
              autoComplete="new-password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-sky-500 to-blue-400 px-6 py-3 text-base text-slate-950 shadow-xl shadow-blue-900/40 hover:from-blue-400 hover:via-sky-400 hover:to-blue-300"
          >
            Create account
          </button>
        </form>

        <div className="border-t border-white/5 bg-slate-900/60 px-8 py-6 text-sm text-blue-100/70">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-blue-200 hover:text-white">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
