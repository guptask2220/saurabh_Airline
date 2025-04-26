

// --- we qare begin--//

import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import SingleSelectDropdown from "../../../common/MultiDropdownMenu"; // Assuming you have a SingleSelectDropdown component
const TripSecondPage = ({ formData, updateFormData, nextStep, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };
  const destinationOptions = [
    "Dubai",
    "India",
    "u.s.a",
    "Australia",
    "Canada",
    "Indonesia",
    "Singapore",
    "Israel",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* <div>
            <select
              value={formData.destinationFrom}
              onChange={(e) =>
                updateFormData("destinationFrom", e.target.value)
              }
              className="w-full border rounded p-2"
              required
            >
              <option value="">Destination from</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>
          </div> */}

          {/* this worked */}
          {/* <div className="relative w-full">
            <select
              value={formData.destinationFrom}
              onChange={(e) =>
                updateFormData("destinationFrom", e.target.value)
              }
              className={`w-full appearance-none border border-gray-300 rounded px-3 py-2 pr-10 text-left ${
                formData.destinationFrom === "" ? "text-gray-400" : "text-black"
              }`}
              required
            >
              <option value="" disabled hidden>
                Destination from
              </option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>

            



           
            <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 h-5 w-px bg-gray-300"></div>

          
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              ▼
            </div>
          </div> */}
          <SingleSelectDropdown
            options={destinationOptions}
            selectedItem={formData.destinationFrom}
            onSelect={(item) => updateFormData("destinationFrom", item)}
            label=" Destination from"/>
          
          {/* <div className="relative w-full">
            <select
              value={formData.destinationTo}
              onChange={(e) => updateFormData("destinationTo", e.target.value)}
              className={`w-full appearance-none border border-gray-300 rounded px-3 py-2 pr-10 text-left ${
                formData.destinationTo === "" ? "text-gray-400" : "text-black"
              }`}
              required
            >
              <option value="" disabled hidden>
                Destination to
              </option>
              <option value="Paris">Paris</option>
              <option value="Tokyo">Tokyo</option>
            </select>

            <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 h-5 w-px bg-gray-300"></div>

            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              ▼
            </div>
          </div> */}
          <SingleSelectDropdown
            options={destinationOptions}
            selectedItem={formData.destinationTo}
            onSelect={(item) => updateFormData("destinationTo", item)}
            label=" Destination to"/>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <DatePicker
              placeholderText="Start Date"
              selected={formData.startDate}
              onChange={(date) => updateFormData("startDate", date)}
              selectsStart
              startDate={formData.startDate}
              endDate={formData.endDate}
              className="w-full border rounded p-2 pl-3 pr-8"
              required
            />
            <CalendarDays className="absolute right-3 top-2.5 text-gray-400" />
          </div>

          <div className="relative">
            <DatePicker
              selected={formData.endDate}
              placeholderText="End Date"
              onChange={(date) => updateFormData("endDate", date)}
              selectsEnd
              startDate={formData.startDate}
              endDate={formData.endDate}
              minDate={formData.startDate}
              className="w-full border rounded p-2 pl-3 pr-8"
              required
            />
            <CalendarDays className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={prevStep}>
          Back
        </Button>
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Continue
        </Button>
      </div>
    </form>
  );
};

export default TripSecondPage;
