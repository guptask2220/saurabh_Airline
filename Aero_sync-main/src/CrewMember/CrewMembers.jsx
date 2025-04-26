import { useState } from "react";

export default function CrewMembers() {
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState({
    clientDailyRate: "",
    clientPerDiem: "",
    crewDailyRate: "",
    crewPerDiem: "",
    vat: "10%",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addMember = () => {
    if (
      !formData.clientDailyRate ||
      !formData.clientPerDiem ||
      !formData.crewDailyRate ||
      !formData.crewPerDiem
    ) return;

    setMembers((prev) => [...prev, formData]);
    setFormData({
      clientDailyRate: "",
      clientPerDiem: "",
      crewDailyRate: "",
      crewPerDiem: "",
      vat: "10%",
    });
  };

  const deleteMember = (index) => {
    setMembers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Crew</h2>

      {/* Add Member Form */}
      <div className="grid grid-cols-5 gap-4 mb-4">
        <input
          type="number"
          name="clientDailyRate"
          placeholder="Client Daily Rate"
          value={formData.clientDailyRate}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <input
          type="number"
          name="clientPerDiem"
          placeholder="Client Per Diem"
          value={formData.clientPerDiem}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <input
          type="number"
          name="crewDailyRate"
          placeholder="Crew Daily Rate"
          value={formData.crewDailyRate}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <input
          type="number"
          name="crewPerDiem"
          placeholder="Crew Per Diem"
          value={formData.crewPerDiem}
          onChange={handleChange}
          className="border px-3 py-2 rounded"
        />
        <button
          onClick={addMember}
          className="bg-slate-500 text-white rounded px-4 py-2"
        >
          Add Member
        </button>
      </div>

      {/* Table */}
      <table className="w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Client Daily Rate</th>
            <th className="p-2 border">Client Per Diem</th>
            <th className="p-2 border">Crew Daily Rate</th>
            <th className="p-2 border">Crew Per Diem</th>
            <th className="p-2 border">VAT</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m, idx) => (
            <tr key={idx} className="text-center">
              <td className="border p-2">${m.clientDailyRate}</td>
              <td className="border p-2">${m.clientPerDiem}</td>
              <td className="border p-2">${m.crewDailyRate}</td>
              <td className="border p-2">${m.crewPerDiem}</td>
              <td className="border p-2">{m.vat}</td>
              <td className="border p-2">
                <button onClick={() => deleteMember(idx)} className="text-red-500">🗑️</button>
              </td>
            </tr>
          ))}
          {members.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center p-4 text-gray-500">
                No crew members added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
