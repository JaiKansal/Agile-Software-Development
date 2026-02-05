import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const { login, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    const state = location.state as { registered?: boolean; email?: string; from?: string } | null;
    if (state?.registered) {
      setSuccess('Account created successfully! Sign in with your email and password.');
      if (state.email) setEmail(state.email);
      window.history.replaceState({}, document.title, location.pathname);
    } else if (state?.from === 'dashboard') {
      setInfo('Please sign in to access your dashboard.');
      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setInfo(null);
    try {
      await login(email, password);
    } catch (err: any) {
      const message = err.response?.data?.message || 'Login failed';
      if (err.response?.status === 404 || message.toLowerCase().includes('no account found')) {
        navigate('/register', { state: { message, email } });
      } else {
        setError(message);
      }
    }
  };

  if (user) return <Navigate to="/dashboard" replace />;

  return (
    <div className="mx-auto mt-12 max-w-xl">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-blue-900/40 backdrop-blur">
        <div className="border-b border-white/5 bg-slate-900/60 px-8 py-6">
          <h2 className="text-3xl font-semibold text-white">Welcome back</h2>
          <p className="mt-2 text-sm text-blue-100/70">Sign in to keep your tasks flowing in style.</p>
        </div>

        {success && (
          <div className="border border-emerald-400/40 bg-emerald-500/10 px-8 py-4 text-sm text-emerald-200">
            {success}
          </div>
        )}
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
            <label htmlFor="email" className="text-sm font-medium text-blue-100/90">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-blue-100/90">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-sky-500 to-blue-400 px-6 py-3 text-base text-slate-950 shadow-xl shadow-blue-900/40 hover:from-blue-400 hover:via-sky-400 hover:to-blue-300"
          >
            Sign in
          </button>
        </form>

        <div className="border-t border-white/5 bg-slate-900/60 px-8 py-6 text-sm text-blue-100/70">
          New to Task Manager?{' '}
          <Link to="/register" className="font-semibold text-blue-200 hover:text-white">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;