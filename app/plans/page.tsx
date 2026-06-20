'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import PlanCard from '@/components/PlanCard';
import Link from 'next/link';

export default function PlansPage() {
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlans() {
      const { data, error } = await supabase
        .from('study_plans')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) setPlans(data);
      setLoading(false);
    }
    fetchPlans();
  }, []);

  return (
    <main className="min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Saved Study Plans</h1>
          <Link 
            href="/" 
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg"
          >
            ← Create New
          </Link>
        </div>
        
        {loading ? (
          <p className="text-black">Loading...</p>
        ) : plans.length === 0 ? (
          <p className="text-gray-600">No saved plans yet.</p>
        ) : (
          <div className="space-y-4">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                subject={plan.subject}
                topics={plan.topics}
                examDate={plan.exam_date}
                plan={plan.plan}
                createdAt={plan.created_at}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
