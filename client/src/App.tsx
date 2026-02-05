import { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function NavBar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-blue-900/40 backdrop-blur-lg sm:flex-row sm:items-center sm:justify-between">
      <Link to="/" className="text-2xl font-semibold tracking-tight text-blue-100">
        Task Manager
      </Link>

      <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-blue-100">
        <Link
          to="/"
          className="rounded-full border border-transparent px-4 py-2 transition hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className="rounded-full border border-transparent px-4 py-2 transition hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
        >
          Dashboard
        </Link>
        {user ? (
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 rounded-full border border-blue-400/40 px-3 py-2 transition hover:border-blue-300/60 hover:bg-blue-500/10"
              aria-expanded={open}
              aria-haspopup="true"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-sky-500 text-sm font-semibold text-slate-950">
                {user.name.charAt(0).toUpperCase()}
              </span>
              <span className="max-w-[100px] truncate text-blue-100 sm:max-w-[140px]">{user.name}</span>
            </button>
            {open && (
              <div className="absolute right-0 top-full z-20 mt-2 min-w-[160px] overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 shadow-xl backdrop-blur">
                <div className="border-b border-white/5 px-4 py-3">
                  <p className="truncate text-sm font-medium text-white">{user.name}</p>
                  <p className="truncate text-xs text-blue-200/70">{user.email}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    logout();
                  }}
                  className="w-full px-4 py-3 text-left text-sm text-red-300 transition hover:bg-red-500/10 hover:text-red-200"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="rounded-full border border-transparent px-4 py-2 transition hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-full border border-transparent px-4 py-2 transition hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="relative min-h-screen">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl sm:h-80 sm:w-80" />
            <div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-sky-500/20 blur-3xl sm:right-[-10%]" />
            <div className="absolute bottom-[-20%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>

          <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
            <NavBar />

            <main className="flex-1 pb-16">
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-10 text-center shadow-2xl shadow-blue-900/40 backdrop-blur">
                      <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-200">
                        <span className="h-2 w-2 rounded-full bg-blue-300" />
                        Stay on top of every task
                      </div>
                      <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Organise your tasks with calm confidence.
                      </h1>
                      <p className="mt-4 text-base leading-relaxed text-blue-100/80 sm:text-lg">
                        A simple and focused MERN stack task manager crafted with a rich blue palette to help you control
                        your day. Create, review and complete tasks without distractions.
                      </p>
                      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Link
                          to="/dashboard"
                          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-sky-500 to-blue-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-blue-900/50 transition hover:from-blue-400 hover:via-sky-400 hover:to-blue-300"
                        >
                          Go to Dashboard
                        </Link>
                        <Link
                          to="/register"
                          className="inline-flex items-center justify-center rounded-xl border border-blue-300/40 bg-blue-500/10 px-6 py-3 text-base font-semibold text-blue-100 transition hover:border-blue-300/80 hover:bg-blue-500/20 hover:text-white"
                        >
                          Create an Account
                        </Link>
                      </div>
                    </div>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </main>
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
