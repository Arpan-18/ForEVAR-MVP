"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Lock, Mail } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.append('username', email);
      formData.append('password', password);

      const res = await fetch('http://localhost:8000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || 'Login failed');
      }

      const data = await res.json();
      localStorage.setItem('token', data.access_token);
      
      // Route to dashboard
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center py-20 px-6">
      <div className="w-full max-w-md glass-panel p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">Welcome Back</h1>
          <p className="text-text-secondary">Log in to the ForEVAR platform</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-secondary flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Email Address
            </label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-primary-bg border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
              placeholder="name@organization.com"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-text-secondary flex items-center">
                <Lock className="w-4 h-4 mr-2" />
                Password
              </label>
              <Link href="#" className="text-xs text-accent-primary hover:underline">Forgot password?</Link>
            </div>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-primary-bg border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" variant="accent" className="w-full" disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-text-secondary">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-accent-primary hover:underline font-medium">
            Request Access
          </Link>
        </div>
      </div>
    </div>
  );
}
