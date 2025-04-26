import React from "react";
import SingleSelectDropdown from "@/common/MultiDropdownMenu";

const CrewMemberFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  newMember,
  handleInputChange,
  updateFormData,
  crewType,
  crewMember,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-lg font-semibold">Add New Crew Member</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={onSubmit} className="p-4">
          <div className="grid grid-rows-3 items-center">
            <div className="grid grid-cols-2 gap-4">
              <SingleSelectDropdown
                options={crewType}
                selectedItem={newMember.type}
                onSelect={(item) => updateFormData("type", item)}
                label="Type"
              />
              <SingleSelectDropdown
                options={crewMember}
                selectedItem={newMember.role}
                onSelect={(item) => updateFormData("role", item)}
                label="Member"
              />
            </div>

            <div className="col-span-2 text-gray-700 font-medium mt-2">
              Crew Member's Appendix A
            </div>

            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Daily Rate"
                name="crewDailyRate"
                value={newMember.crewDailyRate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Per Diems"
                name="crewPerDiems"
                value={newMember.crewPerDiems}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div className="col-span-2 text-gray-700 font-medium mt-2">
              Clients Appendix-1
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Daily Rate"
                name="clientDailyRate"
                value={newMember.clientDailyRate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Per Diems"
                name="clientPerDiems"
                value={newMember.clientPerDiems}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Save Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrewMemberFormModal;
