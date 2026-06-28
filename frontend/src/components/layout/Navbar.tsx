"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthStore } from '@/store/authStore';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Technology', href: '/technology' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Why It Matters', href: '/why-it-matters' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        isScrolled 
          ? "bg-[#020202]/70 backdrop-blur-xl border-white/5 py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 z-50">
          <img src="/logos/logo_biogas2.png" alt="ForEVAR Logo" className="w-8 h-8 object-contain" />
          <span className="font-heading font-bold text-2xl tracking-tighter text-white">
            For<span className="text-accent-primary">EVAR</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors py-2 hover:text-white group",
                  isActive ? "text-white" : "text-text-secondary"
                )}
              >
                {link.name}
                
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Hover Indicator */}
                {!isActive && (
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white/30 rounded-full group-hover:w-full transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link href="/dashboard" className="text-text-secondary hover:text-white transition-colors text-sm font-medium">
                {user?.first_name} {user?.last_name}
              </Link>
              <Button variant="outline" size="sm" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-text-secondary hover:text-white transition-colors text-sm font-medium">
                Login
              </Link>
              <Link href="/contact">
                <Button variant="accent" size="sm">Partner With Us</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-primary-bg flex flex-col pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-heading font-medium text-white hover:text-accent-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 flex flex-col space-y-4">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-center">Login</Button>
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="accent" className="w-full justify-center">Partner With Us</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
