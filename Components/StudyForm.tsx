'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function StudyForm() {
  const [subject, setSubject] = useState('');
  const [topics, setTopics] = useState('');
  const [examDate, setExamDate] = useState('');
  const [plan, setPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, topics, examDate }),
      });
      
      const data = await response.json();
      setPlan(data.plan);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to generate plan');
    }
    
    setLoading(false);
  };

  return (
<form
  onSubmit={handleSubmit}
  className="w-full max-w-3xl mx-auto my-10 p-12 space-y-6 bg-white/80 backdrop-blur rounded-xl shadow-xl"
>
      <h1 className="text-3xl font-bold text-center text-black">
        PrepWise AI
      </h1>
      <p className="text-center text-gray-600 text-sm">Smart Study Planner</p>
      
      <div>
        <label className="block text-sm font-medium mb-1 text-black">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-3 rounded-lg bg-white border border-blue-300 text-black placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          placeholder="e.g., Mathematics"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-black">Topics</label>
        <textarea
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
          className="w-full p-3 rounded-lg bg-white border border-blue-300 text-black placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          placeholder="e.g., Algebra, Calculus, Geometry"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-black">Exam Date</label>
        <input
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
          className="w-full p-3 rounded-lg bg-white border border-blue-300 text-black focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white p-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-300 transition-all shadow-lg"
      >
        {loading ? 'Generating...' : 'Generate Study Plan'}
      </button>

      {plan && (
        <div className="mt-8 p-6 bg-white border border-blue-200 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2 text-black">Your Study Plan</h2>
          <pre className="whitespace-pre-wrap text-sm text-black">{plan}</pre>
          
          <button
            type="button" 
            onClick={async () => {
              const { data, error } = await supabase
                .from('study_plans')
                .insert({
                  subject,
                  topics,
                  exam_date: examDate,
                  plan,
                })
                .select();
              
              if (error) {
                console.error('Supabase error:', error);
                alert('Failed to save: ' + error.message);
              } else {
                alert('Plan saved successfully!');
              }
            }}
            className="mt-4 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all shadow"
          >
            Save Plan
          </button>
        </div>
      )}
    </form>
  );
}
