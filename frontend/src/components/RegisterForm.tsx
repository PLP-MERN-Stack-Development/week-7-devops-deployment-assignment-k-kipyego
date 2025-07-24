import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { register } from '../api/auth';
import { useAuth } from '../contexts/AuthContext';
import { RegisterCredentials } from '../types/auth';

export default function RegisterForm() {
  const { setUser } = useAuth();
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    name: '',
    email: '',
    password: '',
  });

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setUser(data);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={credentials.name}
          onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
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
          minLength={6}
          required
        />
      </div>
      <button
        type="submit"
        disabled={registerMutation.isPending}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        {registerMutation.isPending ? 'Creating account...' : 'Register'}
      </button>
      {registerMutation.isError && (
        <div className="text-red-500 text-sm">
          {registerMutation.error instanceof Error ? registerMutation.error.message : 'Registration failed'}
        </div>
      )}
    </form>
  );
} 