import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

const workflows = {
  "Full Plan – No Plan": [
    "Intro Meeting",
    "Risk Profiling",
    "Financial Needs Analysis",
    "Plan Presentation",
    "Implementation",
    "Welcome Email"
  ],
  "Limited Plan – With Plan": [
    "Needs Refresh",
    "Plan Review",
    "Execution",
    "Check-in Call"
  ],
  "Product Advice": [
    "Clarify Need",
    "Product Selection",
    "Quoting",
    "Implementation"
  ],
  "Intermediary Only": [
    "Receive Request",
    "Form Handling",
    "Confirm Update"
  ],
  "Intermediary to Planning Introduction": [
    "Reintroduction Email",
    "Set Review Call",
    "Value Discussion",
    "Conversion"
  ]
};

export default function Dashboard() {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ name: "", workflow: "" });

  useEffect(() => {
    const saved = localStorage.getItem("clients");
    if (saved) setClients(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  const updateStep = (index, step) => {
    const updated = [...clients];
    updated[index].currentStep = step;
    updated[index].steps[step].completed = true;
    setClients(updated);
  };

  const addClient = () => {
    const steps = workflows[newClient.workflow].map(label => ({ label, completed: false, notes: "" }));
    setClients([...clients, { ...newClient, steps, currentStep: 0 }]);
    setNewClient({ name: "", workflow: "" });
  };

  const exportToExcel = () => {
    const data = clients.map(c => ({
      Name: c.name,
      Workflow: c.workflow,
      "Current Step": c.steps[c.currentStep]?.label || "",
      Completed: c.steps.filter(s => s.completed).length + "/" + c.steps.length
    }));
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Clients");
    XLSX.writeFile(workbook, "ClientProgress.xlsx");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Client Workflow Tracker</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Client Name"
          value={newClient.name}
          onChange={e => setNewClient({ ...newClient, name: e.target.value })}
          className="border p-2 rounded w-1/3"
        />
        <select
          value={newClient.workflow}
          onChange={e => setNewClient({ ...newClient, workflow: e.target.value })}
          className="border p-2 rounded w-1/3"
        >
          <option value="">Select Workflow</option>
          {Object.keys(workflows).map(w => (
            <option key={w}>{w}</option>
          ))}
        </select>
        <button onClick={addClient} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Client
        </button>
        <button onClick={exportToExcel} className="bg-green-600 text-white px-4 py-2 rounded">
          Export
        </button>
      </div>

      <table className="w-full text-left border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Workflow</th>
            <th className="border p-2">Progress</th>
            <th className="border p-2">Step</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td className="border p-2">{client.name}</td>
              <td className="border p-2">{client.workflow}</td>
              <td className="border p-2">
                {client.steps.filter(s => s.completed).length}/{client.steps.length}
              </td>
              <td className="border p-2">
                <select
                  value={client.currentStep}
                  onChange={e => updateStep(index, Number(e.target.value))}
                  className="p-1 border rounded"
                >
                  {client.steps.map((s, i) => (
                    <option key={i} value={i}>
                      {s.label} {s.completed ? "✓" : ""}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
