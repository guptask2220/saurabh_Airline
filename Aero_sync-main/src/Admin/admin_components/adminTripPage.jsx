// import { useState } from "react";
// import TripFirstPage from "../component/Trip/TripFirstPage";
// import TripSecondPage from "../component/Trip/TripSecondPage";
// import TripThirdPage from "../component/Trip/TripThirdPage";
// // import TripFourthPage from "@/components/trip/TripFourthPage";
// import TripSteps from "../component/Trip/TripSteps"; 
// export default function AdminTripPage() {
//   const [step, setStep] = useState(1);

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-xl font-semibold mb-4">Create New Trip</h2>
//       <TripSteps />
//       <div className="bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
//         {step === 1 && <TripFirstPage nextStep={nextStep} />}
//         {step === 2 && <TripSecondPage nextStep={nextStep} prevStep={prevStep} />}
//         {step === 3 && <TripThirdPage nextStep={nextStep} prevStep={prevStep} />}
//         {step === 4 && <TripFourthPage prevStep={prevStep} />}
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TripFirstPage from "./TripFirstPage";
import TripSecondPage from "./TripSecondPage";
import TripThirdPage from "./TripThirdPage";

const CreateTripPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  
  const [tripData, setTripData] = useState({
    // Step 1 data
    tripName: "",
    client: "",
    approveExpenses: false,
    fees: "",
    percentage: "",
    description: "",
    
    // Step 2 data
    startDate: null,
    endDate: null,
    destinationFrom: "",
    destinationTo: "",
    
    // Step 3 data
    aircraft: "",
    crewMembers: []
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);
  const goToStep = (step) => setCurrentStep(step);

  const updateTripData = (field, value) => {
    setTripData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Save trip data and navigate back to dashboard
    console.log("Trip created:", tripData);
    navigate("/");
  };

  const steps = [
    { id: 1, name: "Basic detail" },
    { id: 2, name: "Date & Route" },
    { id: 3, name: "Aircraft" },
    { id: 4, name: "Crew Member" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Step Navigation */}
      <div className="flex space-x-6 border-b mb-6">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => goToStep(step.id)}
            className={`pb-2 font-medium ${
              currentStep === step.id
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
          >
            {step.name}
          </button>
        ))}
      </div>

      {/* Step Content */}
      {currentStep === 1 && (
        <TripFirstPage 
          tripData={tripData} 
          updateTripData={updateTripData} 
          nextStep={nextStep} 
        />
      )}
      
      {currentStep === 2 && (
        <TripSecondPage 
          tripData={tripData} 
          updateTripData={updateTripData} 
          nextStep={nextStep} 
          prevStep={prevStep} 
        />
      )}
      
      {currentStep === 3 && (
        <TripThirdPage 
          tripData={tripData} 
          updateTripData={updateTripData} 
          nextStep={handleSubmit}  // On last step, submit instead of next
          prevStep={prevStep} 
        />
      )}
    </div>  );
};

export default CreateTripPage;