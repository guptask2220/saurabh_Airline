import { useState } from 'react';

const Agreement = () => {
  const [activeTab, setActiveTab] = useState('crew');

  const crewAgreement = [
    {
      title: "SERVICE AGREEMENT",
      content: `
        THIS SERVICE AGREEMENT (hereinafter the "Agreement") is deemed executed in Dubai, United Arab Emirates.
        
        BETWEEN: Matrix Aviation (MicroComerci), UAE, this address is The One Tower Internet City Forum Dubai UAE. (hereinafter referred to as the Service Provider.)
        
        AND: Aviation AI Futures LLC, a corporation having a place of business incorporated in Dubai and The Operator of Moran Incumbent referred to as "DCAP and I'm The Operator").
      `
    },
    {
      title: "SCOPE",
      content: `
        AirConceivers had provide Type Patest and Qualified Flight Cover to DCAP (defined under this agreement as the Operator) for its utilised while the DCAP flight operations department under the following terms and conditions:
        
        - CREW MEMBER
          The provided Cover Member as defined in Appendix 1 (hereinafter referred to as View Member).
        
        - ADEQUAT ALLOCATION
          The Specific aircraft type and registration which file assigned Cover Member is allocated to operate on behalf of the Service Provider for the benefit of the Operator defined in Appendix 2.
      `
    },
    {
      title: "TERMS & CONDITIONS",
      content: `
        Term: Commencing an ACM November 2023 up to and including ACM November 2023 pending any governmental formalities such as visa processing or license verification.
        
        1) Fees, Rates, Per Diems and Expenses:
        
           a. For its services while up Additional fees (as defined below), DCAP will pay AirConceivers for the full day ACM per unit, such as per time of USD 2006 and reasonable expenses. DCAP will also pay AirConceivers support fee USD 2006 per crew.
      `
    }
  ];

  const clientAgreement = [
    {
      title: "CLIENT SERVICE AGREEMENT",
      content: `
        THIS CLIENT AGREEMENT is made and entered into in Dubai, United Arab Emirates.
        
        BETWEEN: The Client (as defined in the registration process) and Air Crew Garage.
      `
    },
    {
      title: "CLIENT OBLIGATIONS",
      content: `
        The Client agrees to the following terms:
        
        - Provide accurate information about flight requirements
        - Make timely payments as specified in the agreement
        - Provide necessary documentation for crew clearance
      `
    },
    {
      title: "CLIENT TERMS",
      content: `
        Payment Terms:
        - 50% advance payment required for service confirmation
        - Balance due before crew deployment
        
        Cancellation Policy:
        - 20 days notice required for cancellation without penalty
      `
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary">✈️ Aero Sync</h1>
        <h2 className="text-xl text-primary">SERVICE AGREEMENT</h2>
      </div>

      <div className="flex justify-center mb-8">
  <div className="flex border rounded-lg overflow-hidden bg-white">
    <button
      className={`px-8 py-3 font-semibold transition-colors ${
        activeTab === 'crew' 
          ? 'bg-slate-500 text-white dark:bg-slate-600' 
          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 '
      }`}
      onClick={() => setActiveTab('crew')}
    >
      Crew Agreement
    </button>
    <button
      className={`px-8 py-3 font-semibold transition-colors ${
        activeTab === 'client' 
          ? 'bg-slate-500 text-white dark:bg-slate-600' 
          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 '
      }`}
      onClick={() => setActiveTab('client')}
    >
      Client Agreement
    </button>
  </div>
</div>

      <div className="border rounded-lg p-6 h-[500px] overflow-y-auto mb-8 bg-white shadow-sm">
        <div className="space-y-8">
          {(activeTab === 'crew' ? crewAgreement : clientAgreement).map((page, index) => (
            <div key={index} className="page">
              <h2 className="text-xl font-semibold text-primary border-b pb-2 mb-4">{page.title}</h2>
              <div className="whitespace-pre-line">{page.content}</div>
              {index < (activeTab === 'crew' ? crewAgreement : clientAgreement).length - 1 && (
                <div className="text-center mt-4 text-gray-400">--- Page {index + 1} ---</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="signature-section border-t pt-8">
        <h3 className="text-lg font-semibold mb-6">Signatures</h3>
        <div className="flex flex-wrap justify-between">
          <div className="mb-6">
            <p className="font-medium">Service Provider:</p>
            <div className="w-64 border-b-2 border-black mt-10 mb-2"></div>
            <p>Name: ________________________</p>
            <p>Date: _________________________</p>
          </div>
          <div className="mb-6">
            <p className="font-medium">{activeTab === 'crew' ? 'Crew Member' : 'Client'}:</p>
            <div className="w-64 border-b-2 border-black mt-10 mb-2"></div>
            <p>Name: ________________________</p>
            <p>Date: _________________________</p>
          </div>
        </div>
      </div>

      <div className="terms-section mt-8 text-sm text-gray-600">
        <h3 className="text-lg font-semibold mb-4 text-primary">Terms & Conditions</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>This agreement is governed by the laws of the United Arab Emirates</li>
          <li>Any disputes shall be resolved through arbitration in Dubai</li>
          <li>Notices must be given in writing with 20 days notice period</li>
          <li>All payments must be made in USD within 14 days of invoice</li>
        </ul>
      </div>
    </div>
  );
};

export default Agreement;