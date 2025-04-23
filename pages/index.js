export default function MetaSelector() {
  const sections = [
    {
      label: "New Clients",
      options: [
        { label: "Full Planning – No Plan", path: "/workflow/full-no-plan" },
        { label: "Full Planning – With Plan", path: "/workflow/full-with-plan" },
        { label: "Limited Planning – With Plan", path: "/workflow/limited-with-plan" },
        { label: "Limited Planning – No Plan", path: "/workflow/limited-no-plan" },
        { label: "Product Advice & Implementation", path: "/workflow/product-advice" },
        { label: "Product Implementation (Intermediary Only)", path: "/workflow/intermediary-only" }
      ]
    },
    {
      label: "Existing Clients",
      options: [
        { label: "Intermediary to Planning Introduction", path: "/workflow/intermediary-to-planning" }
      ]
    }
  ];

  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Start Here: Workflow Selector</h1>
      {sections.map((section, i) => (
        <div key={i} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.label}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.options.map((item, j) => (
              <a key={j} href={item.path} className="block border border-blue-600 rounded-lg p-4 hover:bg-blue-50">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
