import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';
import { useAuth } from '../contexts/AuthContext';
import { LoginCredentials } from '../types/auth';

export default function LoginForm() {
  const { setUser } = useAuth();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loginMutation.isPending}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        {loginMutation.isPending ? 'Logging in...' : 'Login'}
      </button>
      {loginMutation.isError && (
        <div className="text-red-500 text-sm">
          {loginMutation.error instanceof Error ? loginMutation.error.message : 'Login failed'}
        </div>
      )}
    </form>
  );
} 