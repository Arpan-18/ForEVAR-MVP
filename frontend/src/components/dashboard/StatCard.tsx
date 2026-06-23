import React from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, icon, trend, className }: StatCardProps) {
  return (
    <div className={cn("glass-panel p-6 glow-hover flex flex-col", className)}>
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-primary-bg rounded-lg border border-border-subtle flex items-center justify-center text-accent-primary">
          {icon}
        </div>
        {trend && (
          <div className={cn(
            "flex items-center text-sm font-medium px-2 py-1 rounded-full",
            trend.isPositive ? "bg-accent-primary/10 text-accent-primary" : "bg-red-500/10 text-red-400"
          )}>
            {trend.isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
            {trend.value}%
          </div>
        )}
      </div>
      <h3 className="text-text-secondary text-sm font-medium mb-1">{title}</h3>
      <div className="text-3xl font-heading font-bold text-white">
        {value}
      </div>
    </div>
  );
}
