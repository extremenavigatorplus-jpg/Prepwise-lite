type PlanCardProps = {
  subject: string;
  topics: string;
  examDate: string;
  plan: string;
  createdAt: string;
};

export default function PlanCard({ subject, topics, examDate, plan, createdAt }: PlanCardProps) {
  return (
    <div className="p-4 border border-blue-200 rounded-lg bg-white/80 backdrop-blur shadow-lg">
      <h3 className="text-lg font-bold text-black">{subject}</h3>
      <p className="text-sm text-gray-700">Topics: {topics}</p>
      <p className="text-sm text-gray-700">Exam: {examDate}</p>
      <p className="text-xs text-gray-500">Created: {new Date(createdAt).toLocaleDateString()}</p>
      <details className="mt-2">
        <summary className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium transition">
          View Plan
        </summary>
        <pre className="mt-2 text-sm whitespace-pre-wrap bg-gray-50 p-3 rounded text-black border border-gray-200">
          {plan}
        </pre>
      </details>
    </div>
  );
}
