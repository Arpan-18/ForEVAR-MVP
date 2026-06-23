"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { useAuthStore } from '@/store/authStore';
import { LayoutDashboard, Package, BarChart3, Settings, LogOut, Bell, Menu, X, Leaf } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuthStore();

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Inventory', href: '/dashboard/inventory', icon: <Package className="w-5 h-5" /> },
    { name: 'Analytics', href: '/dashboard/analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Settings', href: '/dashboard/settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-primary-bg overflow-hidden text-white font-body">
        
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/50 md:hidden backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed md:static inset-y-0 left-0 z-50 w-64 bg-secondary-bg border-r border-border-subtle transform transition-transform duration-200 ease-in-out flex flex-col
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="h-20 flex items-center px-6 border-b border-border-subtle">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded flex items-center justify-center bg-primary-bg overflow-hidden border border-border-subtle">
                <img src="/logos/logo_biogas2.png" alt="ForEVAR" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">ForEVAR Hub</span>
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${
                    isActive 
                      ? 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20' 
                      : 'text-text-secondary hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="p-4 border-t border-border-subtle">
            <button 
              onClick={logout}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-400 hover:bg-red-400/10 transition-colors font-medium"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Header */}
          <header className="h-20 bg-primary-bg/80 backdrop-blur-md border-b border-border-subtle flex items-center justify-between px-6 z-30">
            <div className="flex items-center">
              <button 
                className="md:hidden text-text-secondary hover:text-white mr-4"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-heading font-semibold capitalize">
                {pathname.split('/').pop() === 'dashboard' ? 'Overview' : pathname.split('/').pop()}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-primary transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-accent-primary rounded-full"></span>
              </button>
              
              <div className="flex items-center gap-3 pl-4 border-l border-border-subtle">
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-bold text-white">{user?.organization?.name}</div>
                  <div className="text-xs text-text-secondary capitalize">{user?.role}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary-bg border border-border-subtle flex items-center justify-center font-heading font-bold text-accent-primary">
                  {user?.first_name?.[0]}{user?.last_name?.[0]}
                </div>
              </div>
            </div>
          </header>

          {/* Main Dashboard Content Area */}
          <main className="flex-1 overflow-y-auto p-6 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
