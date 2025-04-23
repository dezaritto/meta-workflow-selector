export default function FullNoPlan() {
  const steps = [
    "Initial Contact and Schedule FIT Meeting",
    "Conduct FIT Meeting – Mutual fit & planning overview",
    "Client reflects; adviser follows up with consent form",
    "Consent form signed and returned",
    "ASTUTE FSE pulled (if applicable)",
    "Discovery meeting scheduled and prepared for",
    "Collect FICA and full client information",
    "Draft personalised plan and prepare recommendations",
    "Plan presentation and agreement",
    "Implementation strategy confirmed",
    "Implementation and product applications initiated"
  ];

  return (
    <div className=\"min-h-screen p-6 bg-white text-gray-800\">
      <h1 className=\"text-2xl font-bold mb-4\">New Client Workflow – Full Planning (No Existing Plan)</h1>
      <p className=\"mb-6\">This is the complete onboarding process for new clients engaging in full financial planning where no previous plan exists.</p>
      <ol className=\"list-decimal ml-6 space-y-4\">
        {steps.map((step, i) => (
          <li key={i} className=\"bg-gray-100 p-4 rounded shadow-sm\">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
