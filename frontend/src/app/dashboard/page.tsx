"use client";

import React from 'react';
import { useAuthStore } from '@/store/authStore';
import { GeneratorDashboard } from '@/components/dashboard/GeneratorDashboard';
import { RecyclerDashboard } from '@/components/dashboard/RecyclerDashboard';

export default function DashboardPage() {
  const { user } = useAuthStore();

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-white mb-2">
          Welcome back, {user.first_name}
        </h1>
        <p className="text-text-secondary">
          Here is what is happening at {user.organization?.name || 'your organization'} today.
        </p>
      </div>

      {user.role === 'generator' ? (
        <GeneratorDashboard />
      ) : user.role === 'recycler' ? (
        <RecyclerDashboard />
      ) : (
        <div className="glass-panel p-8 text-center text-text-secondary">
          <p>Dashboard view for role '{user.role}' is not yet configured.</p>
        </div>
      )}
    </div>
  );
}
