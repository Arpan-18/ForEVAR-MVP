import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@/store/authStore';
import { StatCard } from './StatCard';
import { DataTable } from './DataTable';
import { Truck, Scale, Activity, AlertTriangle, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';

const columns = [
  { key: 'id', header: 'Lot ID', render: (val: string) => <span className="font-mono text-accent-secondary">{val}</span> },
  { key: 'source', header: 'Generator Source' },
  { key: 'material', header: 'Material Category' },
  { key: 'expectedWeight', header: 'Est. Weight' },
  { key: 'expectedQuality', header: 'Expected Quality', render: (val: string) => (
    <span className={`px-2 py-1 rounded text-xs font-bold ${val === 'Grade A' ? 'bg-accent-primary/20 text-accent-primary' : 'bg-yellow-500/20 text-yellow-500'}`}>
      {val}
    </span>
  )},
  { key: 'status', header: 'Logistics Status' },
];

export function RecyclerDashboard() {
  const { token } = useAuthStore();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['dashboard', 'recycler'],
    queryFn: async () => {
      const res = await fetch('http://localhost:8000/api/v1/lots/dashboard', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Failed to fetch dashboard data');
      return res.json();
    }
  });

  const seedData = async () => {
    try {
      await fetch('http://localhost:8000/api/v1/lots/seed', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      refetch();
    } catch (e) {
      console.error(e);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[60vh] w-full items-center justify-center">
        <Loader2 className="w-8 h-8 text-accent-primary animate-spin" />
      </div>
    );
  }

  const { kpis, inboundLots } = data || { kpis: {}, inboundLots: [] };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex justify-end mb-4">
        <Button variant="outline" size="sm" onClick={seedData}>
          Generate Test Data
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Inbound Material" 
          value={`${kpis.inboundMaterial || 0} Tons`} 
          icon={<Truck className="w-6 h-6" />} 
          trend={{ value: 8.4, isPositive: true }}
        />
        <StatCard 
          title="Processed This Month" 
          value={`${kpis.processedThisMonth || 0} Tons`} 
          icon={<Activity className="w-6 h-6" />} 
          trend={{ value: 15.2, isPositive: true }}
        />
        <StatCard 
          title="Avg Recovery Rate" 
          value={kpis.avgRecoveryRate || "0%"} 
          icon={<Scale className="w-6 h-6" />} 
          trend={{ value: 2.1, isPositive: true }}
        />
        <StatCard 
          title="Contamination Rejects" 
          value={kpis.contaminationRejects || "0%"} 
          icon={<AlertTriangle className="w-6 h-6" />} 
          trend={{ value: 0.5, isPositive: false }}
        />
      </div>

      <div className="glass-panel p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-heading font-bold">Inbound Inventory Preview</h2>
          <button className="text-sm text-accent-primary hover:underline">View Schedule</button>
        </div>
        {inboundLots.length > 0 ? (
          <DataTable columns={columns} data={inboundLots} />
        ) : (
          <div className="text-center py-12 text-text-secondary border border-dashed border-border-subtle rounded-xl">
            No incoming lots found. Click 'Generate Test Data' to seed the database.
          </div>
        )}
      </div>

    </div>
  );
}
