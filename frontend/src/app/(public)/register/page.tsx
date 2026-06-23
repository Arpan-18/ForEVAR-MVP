"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    organizationName: '',
    organizationType: 'generator',
    role: 'generator' // defaults, UI will set this based on organizationType if needed
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const payload = {
        email: formData.email,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName,
        organization_name: formData.organizationName,
        organization_type: formData.organizationType,
        role: formData.organizationType === 'admin_org' ? 'admin' : formData.organizationType
      };

      const res = await fetch('http://localhost:8000/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || 'Registration failed');
      }

      // Auto-login after registration or just redirect to login
      router.push('/login');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center py-20 px-6">
      <div className="w-full max-w-xl glass-panel p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">Join ForEVAR</h1>
          <p className="text-text-secondary">Register your organization on the network</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-secondary">First Name</label>
              <input 
                type="text" 
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-primary-bg border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-secondary">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-primary-bg border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-text-secondary">Work Email</label>
            <input 
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-primary-bg border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-text-secondary">Password</label>
            <input 
              type="password" 
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-primary-bg border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
            />
          </div>

          <div className="pt-4 border-t border-border-subtle space-y-6">
            <h3 className="font-heading font-semibold text-white">Organization Details</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-secondary">Organization Name</label>
              <input 
                type="text" 
                name="organizationName"
                required
                value={formData.organizationName}
                onChange={handleChange}
                className="w-full bg-primary-bg border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-secondary">Organization Type</label>
              <select 
                name="organizationType"
                required
                value={formData.organizationType}
                onChange={handleChange}
                className="w-full bg-primary-bg border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
              >
                <option value="generator">Waste Generator (Corporate, Campus)</option>
                <option value="recycler">Recycler / Processor</option>
                <option value="brand">FMCG Brand (EPR Client)</option>
              </select>
            </div>
          </div>

          <Button type="submit" variant="accent" className="w-full" disabled={loading}>
            {loading ? 'Creating Account...' : 'Register Organization'}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-text-secondary">
          Already have an account?{' '}
          <Link href="/login" className="text-accent-primary hover:underline font-medium">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
