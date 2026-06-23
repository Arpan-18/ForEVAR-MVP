import React from 'react';
import { cn } from '@/lib/utils';
import { MoreHorizontal } from 'lucide-react';

interface Column {
  key: string;
  header: string;
  render?: (value: any, item: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  className?: string;
}

export function DataTable({ columns, data, className }: DataTableProps) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-xl border border-border-subtle bg-secondary-bg", className)}>
      <table className="w-full text-left text-sm">
        <thead className="bg-primary-bg/50 text-text-secondary border-b border-border-subtle">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-6 py-4 font-medium">
                {col.header}
              </th>
            ))}
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-subtle">
          {data.map((item, i) => (
            <tr key={item.id || i} className="hover:bg-white/[0.02] transition-colors">
              {columns.map((col) => (
                <td key={col.key} className="px-6 py-4 text-white">
                  {col.render ? col.render(item[col.key], item) : item[col.key]}
                </td>
              ))}
              <td className="px-6 py-4 text-right">
                <button className="text-text-secondary hover:text-white transition-colors">
                  <MoreHorizontal className="w-5 h-5 ml-auto" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
