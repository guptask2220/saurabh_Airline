

import { useState } from 'react';
import TripSteps from '../component/Trip/TripSteps';
import TripFirstPage from '../component/Trip/TripFirstPage';
import TripSecondPage from '../component/Trip/TripSecondPage';
import TripThirdPage from '../component/Trip/TripThirdPage';
import TripFourthPage from '../component/Trip/TripFourthPage';
import Agreement from '../component/Trip/Agreement';
const AdminTripDashboard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Detail
    tripName: '',
    client: '',
    approveExpenses: false,
    fees: '',
    percentage: '',
    description: '',
    
    // Step 2: Date & Route
    startDate: null,
    endDate: null,
    destinationFrom: '',
    destinationTo: '',
    
    // Step 3: Aircraft
    aircrafttype: '',
    aircraftregistration: '',
    hotelType:'',
    travelclass: '',
    
    // Step 4: Crew Member
    crewMembers: [],
    documents: {
      contract: false,
      invoice: false,
      clientAgreement: false,
      crewAgreement: false
    }
  });

  const steps = [
    { id: 1, name: 'Basic detail' },
    { id: 2, name: 'Date & Route' },
    { id: 3, name: 'Aircraft' },
    { id: 4, name: 'Crew Member' }
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return <TripFirstPage formData={formData} updateFormData={updateFormData} nextStep={nextStep} />;
      case 2:
        return <TripSecondPage formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <TripThirdPage formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <TripFourthPage formData={formData} updateFormData={updateFormData} prevStep={prevStep} />;
      default:
        return <TripFirstPage formData={formData} updateFormData={updateFormData} nextStep={nextStep} />;
    }
  };

  return (
    <div className="flex min-h-screen  bg-gray-50">
      
      

     
      <div className="w-[70%] p-6">
        {/* Step Navigation */}
        <TripSteps 
          steps={steps} 
          currentStep={currentStep} 
          setCurrentStep={setCurrentStep} 
        />

        {/* Form Content */}
        <div className="mt-8">
          {renderStepContent()}
        </div>
      </div>
      


      <div className="">
      <Agreement className=""/>
      </div>
      
    </div>
  );
};

export default AdminTripDashboard;