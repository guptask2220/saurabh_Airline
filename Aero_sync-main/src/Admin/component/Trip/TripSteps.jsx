// const TripSteps = ({ tabs = [], activeTab, onTabChange }) => {
//   return (
//     <div className="flex space-x-6 border-b">
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           onClick={() => onTabChange(tab)}
//           className={`pb-2 font-medium ${
//             activeTab === tab
//               ? "border-b-2 border-black font-semibold"
//               : "text-gray-500"
//           }`}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default TripSteps;

//------ we are begin----//

const TripSteps = ({ steps, currentStep, setCurrentStep }) => {
  return (
    <div className="flex border-b">
      {steps.map((step) => (
        <button
          key={step.id}
          onClick={() => setCurrentStep(step.id)}
          className={`px-4 py-2 font-medium ${
            currentStep === step.id
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {step.name}
        </button>
      ))}
    </div>
  );
};

export default TripSteps;