const workflowOptions = [
  {
    question: "Does the client want a full financial planning relationship?",
    options: [
      { { label: "Yes, but they don’t have a financial plan", link: "https://workflow-full-planning-no-plan.vercel.app" },
      { label: "Yes, but they don’t have a financial plan", link: "https://example.com/full-plan-new" }
    ]
  },
  {
    question: "Does the client want a limited planning engagement?",
    options: [
      { label: "Yes, and they already have a plan", link: "https://example.com/limited-plan-existing" },
      { label: "Yes, but they don’t have a plan", link: "https://example.com/limited-plan-new" }
    ]
  },
  {
    question: "Do they only want product implementation?",
    options: [
      { label: "Yes, with advice", link: "https://example.com/product-advice" },
      { label: "Yes, execution-only (no advice)", link: "https://example.com/intermediary-only" }
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen p-6 bg-gray-50 text-gray-900">
      <h1 className="text-2xl font-bold mb-6">Start Here: Workflow Selector</h1>
      <div className="space-y-6">
        {workflowOptions.map((step, index) => (
          <div key={index} className="border p-4 rounded-xl shadow-sm bg-white">
            <h2 className="font-semibold mb-2">{step.question}</h2>
            <div className="space-y-2">
              {step.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => window.open(option.link, '_blank')}
                  className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
