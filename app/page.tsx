import StudyForm from '@/components/StudyForm';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen py-10 px-4">
      <div className="fixed top-6 right-6 z-50">
        <Link 
          href="/plans" 
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg"
        >
          View Saved Plans
        </Link>
      </div>
      <StudyForm />
    </main>
  );
}
