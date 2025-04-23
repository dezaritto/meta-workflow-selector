export default function MetaSelector() {
  const newClientRoutes = [
    { label: "Full Plan – No Plan", path: "/workflow/full-no-plan" },
    { label: "Full Plan – With Plan", path: "/workflow/full-with-plan" },
    { label: "Limited Plan – With Plan", path: "/workflow/limited-with-plan" },
    { label: "Limited Plan – No Plan", path: "/workflow/limited-no-plan" },
    { label: "Product Advice & Implementation", path: "/workflow/product-advice" },
    { label: "Product Implementation (Intermediary Only)", path: "/workflow/intermediary-only" },
  ];

  const existingClientRoutes = [
    { label: "Intermediary to Planning Introduction", path: "/workflow/existing-intermediary-upgrade" },
  ];

  const otherRoutes = [
    { label: "Adviser Dashboard", path: "/dashboard" }
  ];

  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Start Here: Workflow Selector</h1>

      <h2 className="text-lg font-semibold mb-2">New Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {newClientRoutes.map((item, i) => (
          <a key={i} href={item.path} className="block border border-blue-600 rounded-lg p-4 hover:bg-blue-50">
            {item.label}
          </a>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-2">Existing Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {existingClientRoutes.map((item, i) => (
          <a key={i} href={item.path} className="block border border-blue-600 rounded-lg p-4 hover:bg-blue-50">
            {item.label}
          </a>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-2">Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {otherRoutes.map((item, i) => (
          <a key={i} href={item.path} className="block border border-blue-600 rounded-lg p-4 hover:bg-blue-50">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
