"use client"
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db'; // Adjust the import according to your setup
import { AIOutput } from '@/utils/schema'; // Adjust the import according to your setup

 export interface HistoryItem {
  formData: string | null;
  aiResponse: string | null;
  templateSlug: string;
  createdAt: string | null;
}

const HistoryPage: React.FC = () => {
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.select().from(AIOutput).execute();
      const formattedData = data.map((item: any) => ({
        formData: item.formData,
        aiResponse: item.aiResponse,
        templateSlug: item.templateSlug,
        createdAt: item.createdAt,
      }));
      setHistoryData(formattedData);
    };

    fetchData();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Templates Slug</th>
            <th className="py-2 px-4 border-b border-gray-200">Form Data</th>
            <th className="py-2 px-4 border-b border-gray-200">AI Response</th>
            <th className="py-2 px-4 border-b border-gray-200">Created At</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-200">
                <div className="h-[120px] overflow-y-auto">
                  {item.templateSlug}
                </div>
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                <div className="h-[120px] overflow-y-auto">
                  {item.formData || 'N/A'}
                </div>
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                <div className="h-[120px] overflow-y-auto">
                  {item.aiResponse || 'N/A'}
                </div>
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                <div className="h-[120px] overflow-y-auto">
                  {item.createdAt || 'N/A'}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryPage;