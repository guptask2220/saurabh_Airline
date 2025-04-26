import { Button } from "@/components/ui/button";
import SingleSelectDropdown from "@/common/MultiDropdownMenu";
const TripThirdPage = ({ formData, updateFormData, nextStep, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };
  const aircraftType = [
    "AirBus",
    "Boeing",
    "Embraer",
    "Dassult",
    "GulfStream",
    "Helicopter",
  ];
  const registrationNumber = [
    "A6-EUY",
    "A6-AAB",
    "Embraer",
    "Dassult",
    "GulfStream",
    "Hawker",
  ];
  const aircraftRegistration = [
    "BCS3",
    "B7Z1",
    "B743",
    "B775",
    "BE567",
    "A321",
  ];
  const hotelType = ["1 star", "2 star", "3 star", "4 star", "5 star"];
  const travelType = ["Economy", "Premium Economy", "Business", "First Class"];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4 w-full">
        {/* First column */}
        {/* <div className="relative w-full">
          <select
            value={formData.aircraftType}
            onChange={(e) => updateFormData("aircraftType", e.target.value)}
            className={`w-full appearance-none border border-gray-300 rounded px-3 py-2 pr-10 text-left ${
              formData.aircraftType === "" ? "text-gray-400" : "text-black"
            }`}
            required
          >
            <option value="" disabled hidden>
              Aircraft Type*
            </option>
            <option value="Private Jet">Private Jet</option>
            <option value="Helicopter">Helicopter</option>
            <option value="Commercial Airliner">Commercial Airliner</option>
          </select>

          <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 h-5 w-px bg-gray-300"></div>

          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            ▼
          </div>
        </div> */}
        <SingleSelectDropdown
          options={aircraftType}
          selectedItem={formData.aircrafttype}
          onSelect={(item) => updateFormData("aircrafttype", item)}
          label="Aircraft Type"
        />
        {/* required */}

        {/* Second column */}
        {/* <div className="relative w-full">
          <select
            value={formData.aircraftregistration}
            onChange={(e) => updateFormData("aircraftregistration", e.target.value)}
            className={`w-full appearance-none border border-gray-300 rounded px-3 py-2 pr-10 text-left ${
              formData.aircraftregistration === "" ? "text-gray-400" : "text-black"
            }`}
            required
          >
            <option value="" disabled hidden>
              Select the Aircraft *
            </option>
            <option value="Commercial">Commercial</option>
            <option value="Private">Private</option>
          </select>

          <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 h-5 w-px bg-gray-300"></div>

          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            ▼
          </div>
        </div> */}

        <SingleSelectDropdown
          options={aircraftRegistration}
          selectedItem={formData.aircraftregistration}
          onSelect={(item) => updateFormData("aircraftregistration", item)}
          label=" Select the aircraft"
        />

        {/* third box */}
        {/* <div className="relative w-full">
          <select
            value={formData.hotelType}
            onChange={(e) => updateFormData("hotelType", e.target.value)}
            className={`w-full appearance-none border border-gray-300 rounded px-3 py-2 pr-10 text-left ${
              formData.hotelType === "" ? "text-gray-400" : "text-black"
            }`}
            required
          >
            <option value="" disabled hidden>
              Hotel Type
            </option>
            <option value="Private Jet">Private Jet</option>
            <option value="Helicopter">Helicopter</option>
            <option value="Commercial Airliner">Commercial Airliner</option>
          </select>

          <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 h-5 w-px bg-gray-300"></div>

          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            ▼
          </div>
        </div> */}
        <SingleSelectDropdown
          options={hotelType}
          selectedItem={formData.hotelType}
          onSelect={(item) => updateFormData("hotelType", item)}
          label=" Hotel Type"
        />

        {/* 4th box */}
        {/* <div className="relative w-full">
          <select
            value={formData.travelclass}
            onChange={(e) => updateFormData("travelclass", e.target.value)}
            className={`w-full appearance-none border border-gray-300 rounded px-3 py-2 pr-10 text-left ${
              formData.travelclass === "" ? "text-gray-400" : "text-black"
            }`}
          >
            <option value="" disabled hidden>
              Airline Travel Class
            </option>
            <option value="Commercial">Commercial</option>
            <option value="Private">Private</option>
          </select>

          <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 h-5 w-px bg-gray-300"></div>

          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            ▼
          </div>
        </div> */}
        <SingleSelectDropdown
          options={travelType}
          selectedItem={formData.travelclass}
          onSelect={(item) => updateFormData("travelclass", item)}
          label=" Airline Travel Class"
        />
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

export default TripThirdPage;
