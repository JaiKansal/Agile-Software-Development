import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

type User = { _id: string; name: string; email: string } | null;

type AuthContextType = {
  user: User;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.get('/users/me')
        .then((res) => setUser(res.data))
        .catch(() => { localStorage.removeItem('token'); setUser(null); })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post('/users/login', { email, password });
    localStorage.setItem('token', res.data.token);
    setUser({ _id: res.data._id, name: res.data.name, email: res.data.email });
    navigate('/dashboard');
  };

  const register = async (name: string, email: string, password: string) => {
    await api.post('/users', { name, email, password });
    navigate('/login', { state: { registered: true, email } });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
