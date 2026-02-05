import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-blue-100/80">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-blue-400/50 border-t-blue-200" />
          <p className="text-sm font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }
  if (!user) return <Navigate to="/login" state={{ from: 'dashboard' }} replace />;
  return children;
};

export default PrivateRoute;
