// import React, { useState } from "react";
// import { Button } from "../../../components/ui/button";

// const DocumentViewer = () => {
//   const [documentType, setDocumentType] = useState("invoice");
//   const [recipientType, setRecipientType] = useState("client");
//   const [isRequestSent, setIsRequestSent] = useState(false);

//   const handleSendRequest = () => {
//     setIsRequestSent(true);
//     setTimeout(() => setIsRequestSent(false), 3000);
//   };

//   return (
//     <div className="container mx-auto p-2 max-w-4xl max-h-screen overflow-y-auto">
//       <h1 className="text-xl font-bold ">Documents</h1>
//       {/* Document Type Selection */}
//       <div className="flex border-b border-gray-200 space-x-4 mb-2">
//         <button
//           onClick={() => setDocumentType("contract")}
//           className={`mr-8 w-1/2  font-medium ${
//             documentType === "contract"
//               ? "text-gray-900 border-b-2 border-gray-900"
//               : "text-gray-500"
//           }`}
//         >
//           Contract
//         </button>
//         <button
//           onClick={() => setDocumentType("invoice")}
//           className={`py-2 w-1/2 font-medium ${
//             documentType === "invoice"
//               ? "text-gray-900 border-b-2 border-gray-900"
//               : "text-gray-500"
//           }`}
//         >
//           Invoice
//         </button>
//       </div>

//       {/* Recipient Type Selection */}
//       <div className="flex mb-6">
//         <button
//           onClick={() => setRecipientType("client")}
//           className={`w-1/2 px-4 py-2 rounded-t-lg mr-2 ${
//             recipientType === "client"
//               ? "bg-slate-400 text-gray-900"
//               : "bg-gray-100 text-gray-600"
//           }`}
//         >
//           Client
//         </button>
//         <button
//           onClick={() => setRecipientType("crew")}
//           className={`w-1/2 px-4 py-2 rounded-t-lg ${
//             recipientType === "crew"
//               ? "bg-slate-400 text-gray-900"
//               : "bg-gray-100 text-gray-600"
//           }`}
//         >
//           Crew Member
//         </button>
//       </div>
//       {/* </div> */}

//       {/* Document content */}
//       <div className="border rounded-lg overflow-hidden mb-6">
//         {/* <div className="bg-gray-200 px-6 py-2 border-b">
//           <h2 className="text-xl font-semibold capitalize">
//             {documentType === "contract" ? "Service Agreement" : "invoice"}
//           </h2>
//           <p className="text-sm text-gray-600 capitalize">
//             {recipientType === "client" ? "Client" : "Crew Member"} version
//           </p>
//         </div> */}

//         <div className="p-6">
//           {documentType === "contract" ? (
//             <div className="prose">
//               <h3>SERVICE AGREEMENT</h3>
//               <p>
//                 <strong>
//                   This SERVICE AGREEMENT (hereinafter the "Agreement") is made
//                   and entered into in Dubai United Arab Emirates.
//                 </strong>
//               </p>
//               <p>
//                 <strong>
//                   BETWEEN [COMPANY NAME], (hereinafter referred to as the
//                   "Service Provider") AND [CLIENT NAME] (hereinafter referred to
//                   as the "Client").
//                 </strong>
//               </p>

//               <p>
//                 <strong>
//                   WHEREAS the Client requires certain services and the Service
//                   Provider has agreed to provide such services under the terms
//                   and conditions set forth herein.
//                 </strong>
//               </p>

//               <p>
//                 <strong>
//                   NOW THEREFORE, in consideration of the mutual covenants
//                   contained herein, the parties agree as follows:
//                 </strong>
//               </p>

//               <h4 className="font-semibold underline">1. SERVICES</h4>
//               <p>
//                 The Service Provider shall provide{" "}
//                 {recipientType === "client"
//                   ? "the agreed services"
//                   : "qualified crew members"}{" "}
//                 as defined in Appendix 1 (hereinafter referred to as "Services")
//                 under the following terms and conditions:
//               </p>

//               <h4 className="font-semibold underline">2. TERM</h4>
//               <p>
//                 This Agreement shall commence on [Start Date] and continue until
//                 [End Date] unless earlier terminated as provided herein.
//               </p>

//               <h4 className="font-semibold underline">3. COMPENSATION</h4>
//               <p>
//                 The Client shall pay the Service Provider the sum of [Amount]
//                 for the Services rendered.
//               </p>

//               <h4 className="font-semibold underline">4. CONFIDENTIALITY</h4>
//               <p>
//                 Both parties agree to maintain the confidentiality of all
//                 proprietary information received.
//               </p>

//               <h4 className="font-semibold underline">5. GOVERNING LAW</h4>
//               <p>
//                 This Agreement shall be governed by and construed in accordance
//                 with the laws of the United Arab Emirates.
//               </p>

//               <div className="mt-8">
//                 <h4>APPENDIX 1 - SERVICE DETAILS</h4>
//                 <p>Detailed description of services to be provided...</p>
//               </div>
//             </div>
//           ) : (
//             <div className="space-y-6">
//               {/* Invoice client header */}

//               {/* <div className="bg-white rounded-xl    shadow-md p-6 border space-y-4 w-full max-w-md">
//                 Header with Download
//                 <div className="flex justify-between items-center border-b pb-4">
//                   <div className="flex flex-col">
//                     <p className="text-gray-500">USD ------</p>
//                     <p className="text-sm text-gray-700">Due: 23/Nov/2022</p>
//                   </div>
//                   <div className="text-right ml-2">
//                     <button className="bg-gray-100 p-2 rounded-md hover:text-blue-800 mt-1">
//                       <p className="text-sm">Download Pdf</p>
//                     </button>
//                   </div>
//                 </div>

//                 Customer Info
//                 <div className="grid mt-0 grid-cols-1 gap-2 border-b ">
//                   <div>
//                     <p className="text-sm text-gray-500">Customer Number</p>
//                     <p className="font-medium">03333428093</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Customer Name</p>
//                     <p className="font-medium">Guillaume Agitny</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Amount Due</p>
//                     <p className="font-medium">USD ---</p>
//                   </div>

//                   <button className="w-full bg-slate-400 text-white text-sm font-medium px-3 py-2 rounded-md">
//                     Pending
//                   </button>
//                 </div>
//               </div> */}

//               {/* Different content based on recipient type */}
//               {recipientType === "client" ? (
//                 <div className=" space-y-5">
//                   {/* client first box */}
//                   <div className="bg-white rounded-xl    shadow-md p-6 border space-y-4 w-full max-w-md">
//                     {/* Header with Download */}
//                     <div className="flex justify-between items-center border-b pb-2">
//                       <div className="flex flex-col">
//                         <p className="text-gray-500">USD ------</p>
//                         <p className="text-sm text-gray-700">
//                           Due: 23/Nov/2022
//                         </p>
//                       </div>
//                       <div className="text-right ml-2">
//                         <button className="bg-gray-100 p-2 rounded-md hover:text-blue-800 mt-1">
//                           <p className="text-sm">Download Pdf</p>
//                         </button>
//                       </div>
//                     </div>

//                     {/* Customer Info */}
//                     <div className="grid gap-1   ">
//                       <div>
//                         <p className="text-sm text-gray-500">Customer Number</p>
//                         <p className="">03333428093</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Customer Name</p>
//                         <p className="">Guillaume Agitny</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Amount Due</p>
//                         <p className="">USD ---</p>
//                       </div>

//                       <button className="w-full bg-slate-400 text-white text-sm font-medium px-3 py-2 rounded-md">
//                         Pending
//                       </button>
//                     </div>
//                   </div>
//                   {/* client second box */}
//                   <div className="bg-white rounded-xl   shadow-md p-6 border space-y-4 w-full max-w-md">
//                     <img
//                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7lUhpKtz301rnC4lmMkAkWudNrMNVZq4kFw&s"
//                       alt=""
//                       className="w-full h-24"
//                     />{" "}
//                     <div className="flex flex-row gap-2 mt-4 ">
//                       <Button className=" w-1/2 bg-slate-400 text-white text-sm font-medium px-3 py-2 rounded-md">
//                         Received
//                       </Button>
//                       <Button className=" w-1/2 bg-slate-400 text-white text-sm font-medium px-3 py-2 rounded-md">
//                         Not Received
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="space-y-5">
//                   {/* Crew-specific invoice content */}
//                   <div className="bg-white rounded-xl    shadow-md p-6 border space-y-4 w-full max-w-md">
//                     {/* Header with Download */}
//                     <div className="flex justify-between items-center border-b pb-2">
//                       <div className="flex flex-col">
//                         <p className="text-gray-500">USD ------</p>
//                         <p className="text-sm text-gray-700">
//                           Due: 23/Nov/2022
//                         </p>
//                       </div>
//                       <div className="text-right ml-2">
//                         <button className="bg-gray-100 p-2 rounded-md hover:text-blue-800 mt-1">
//                           <p className="text-sm">Download Pdf</p>
//                         </button>
//                       </div>
//                     </div>

//                     {/* Customer Info */}
//                     <div className="grid gap-1   ">
//                       <div>
//                         <p className="text-sm text-gray-500">Crew Number</p>
//                         <p className="">03333428093</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Crew Name</p>
//                         <p className="">Guillaume Agitny</p>
//                       </div>
//                       <div className="border-b mb-3">
//                         <p className="text-sm text-gray-500">Amount Due</p>
//                         <p className="mb-2">USD ---</p>
//                       </div>

//                       <button className="w-full  bg-slate-400 text-white text-sm font-medium px-3 py-2 rounded-md">
//                         Direct Pay
//                       </button>
//                       <button className="w-full  bg-slate-400 text-white text-sm font-medium px-3 py-2 rounded-md">
//                         Bank Transfer
//                       </button>
//                     </div>
//                   </div>

//                   {/* <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
//                     <p className="text-blue-700 font-medium">
//                       PAYMENT PROCESSING - EXPECTED CLEARANCE 3 BUSINESS DAYS
//                     </p>
//                   </div> */}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Status and actions */}
//       {/* <div className="mb-6">
//         <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
//           <div className="flex">
//             <div className="flex-shrink-0">
//               <svg
//                 className="h-5 w-5 text-yellow-400"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>
//             <div className="ml-3">
//               <p className="text-sm text-yellow-700">
//                 {documentType === "invoice"
//                   ? `Invoice is ${
//                       recipientType === "client"
//                         ? "pending client payment"
//                         : "being processed for crew payment"
//                     }`
//                   : `Contract is pending ${
//                       recipientType === "client" ? "client" : "crew"
//                     } signature`}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-wrap gap-4">
//           <button
//             onClick={handleSendRequest}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
//             disabled={isRequestSent}
//           >
//             {isRequestSent
//               ? "Request Sent"
//               : `SEND REMINDER TO ${
//                   recipientType === "client" ? "CLIENT" : "CREW MEMBER"
//                 }`}
//           </button>

//           <div className="flex gap-2">
//             <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md">
//               VIEW DETAILS
//             </button>
//             <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md">
//               DOWNLOAD
//             </button>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default DocumentViewer;
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import  BankTransferForm from "../../../common/bankTransfer"; 
import BankTransferPage from "../../../common/bankTransferPage" // Adjust the import path as necessary
const DocumentViewer = () => {
  const [documentType, setDocumentType] = useState("invoice");
  const [recipientType, setRecipientType] = useState("client");
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [showBankpage, setShowBankpage] = useState(false);

  const [showBankForm, setShowBankForm] = useState(false);

  return (
    <div className="container mx-auto p-2 max-w-4xl max-h-screen overflow-y-auto">
      <h1 className="text-xl font-bold">Documents</h1>

      {/* Document Type Selection - unchanged */}
      <div className="flex border-b border-gray-200 space-x-4 mb-2">
        <button
          onClick={() => setDocumentType("contract")}
          className={`mr-8 w-1/2 font-medium ${
            documentType === "contract"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-500"
          }`}
        >
          Contract
        </button>
        <button
          onClick={() => setDocumentType("invoice")}
          className={`py-2 w-1/2 font-medium ${
            documentType === "invoice"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-500"
          }`}
        >
          Invoice
        </button>
      </div>

      {/* Recipient Type Selection - unchanged */}
      <div className="flex mb-6">
        <button
          onClick={() => setRecipientType("client")}
          className={`w-1/2 px-4 py-2 rounded-t-lg mr-2 ${
            recipientType === "client"
              ? "bg-slate-400 text-gray-900"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Client
        </button>
        <button
          onClick={() => setRecipientType("crew")}
          className={`w-1/2 px-4 py-2 rounded-t-lg ${
            recipientType === "crew"
              ? "bg-slate-400 text-gray-900"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Crew Member
        </button>
      </div>

      {/* Document content */}
      <div className="border rounded-lg overflow-hidden mb-6">
        <div className="p-6 flex justify-center">
          {documentType === "contract" ? (
            <div className="max-w-md">
              {/* Improved Contract Content */}
              <h3 className="text-xl font-bold text-center mb-4">
                SERVICE AGREEMENT
              </h3>

              <p className="font-semibold mb-4">
                This SERVICE AGREEMENT (hereinafter the "Agreement") is made and
                entered into in Dubai, United Arab Emirates.
              </p>

              <p className="font-semibold mb-6">
                BETWEEN:{" "}
                <span className="text-blue-600">
                  Aero Sync Aviation Services
                </span>{" "}
                (Service Provider) AND:
                <span className="text-blue-600">
                  {" "}
                  {recipientType === "client"
                    ? "[CLIENT NAME]"
                    : "[CREW MEMBER NAME]"}
                </span>
                ({recipientType === "client" ? "Client" : "Crew Member"}).
              </p>

              <div className="my-4">
                <h4 className="font-semibold underline">1. SERVICES</h4>
                <p>
                  The Service Provider shall provide{" "}
                  {recipientType === "client"
                    ? "the agreed aircraft crew services"
                    : "employment as a qualified crew member"}{" "}
                  as specified in Appendix 1.
                </p>
              </div>

              <div className="my-4">
                <h4 className="font-semibold underline">2. TERM</h4>
                <p>
                  Commencing on [Start Date] until{" "}
                  {recipientType === "client"
                    ? "completion of services"
                    : "terminated with 30 days notice"}
                  .
                </p>
              </div>

              <div className="my-4">
                <h4 className="font-semibold underline">3. COMPENSATION</h4>
                <p>
                  {recipientType === "client"
                    ? "Client shall pay USD [Amount] for services rendered."
                    : "Crew Member shall be paid USD $200 per flight hour, payable bi-weekly."}
                </p>
              </div>

              <div className="my-4">
                <h4 className="font-semibold underline">4. CONFIDENTIALITY</h4>
                <p>
                  Both parties agree to maintain confidentiality of all
                  proprietary information.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t">
                <h4>APPENDIX 1 - SERVICE DETAILS</h4>
                <p>
                  {recipientType === "client"
                    ? "Detailed description of aircraft crew services to be provided."
                    : "Specific duties, certifications, and requirements for the Crew Member."}
                </p>
              </div>

              {/* Signature Section */}
              <div className="mt-8 pt-6 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="font-medium">Service Provider:</p>
                    <div className="w-full border-b border-gray-400 mt-6 mb-2 h-8"></div>
                    <div className="flex justify-between text-sm">
                      <span>Name: __________________</span>
                      <span>Date: ___________</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">
                      {recipientType === "client" ? "Client" : "Crew Member"}:
                    </p>
                    <div className="w-full border-b border-gray-400 mt-6 mb-2 h-8"></div>
                    <div className="flex justify-between text-sm">
                      <span>Name: __________________</span>
                      <span>Date: ___________</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Original Invoice Content - completely unchanged */
            <div className="max-w-md space-y-5">
              {recipientType === "client" ? (
                <div className="max-w-md space-y-5">
                  <div className="bg-white rounded-xl shadow-md p-6 border space-y-4 w-full ">
                    <div className="flex justify-between items-center border-b pb-2">
                      <div className="flex flex-col">
                        <p className="text-gray-500">USD ------</p>
                        <p className="text-sm text-gray-700">
                          Due: 23/Nov/2022
                        </p>
                      </div>
                      <div className="text-right ml-2">
                        <button className="bg-gray-100 p-2 rounded-md hover:text-blue-800 mt-1">
                          <p className="text-sm">Download Pdf</p>
                        </button>
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <div>
                        <p className="text-sm text-gray-500">Customer Number</p>
                        <p className="">03333428093</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Customer Name</p>
                        <p className="">Guillaume Agitny</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Amount Due</p>
                        <p className="">USD ---</p>
                      </div>
                      <button className="w-full bg-slate-400 text-white text-sm font-medium px-3 py-2 rounded-md">
                        Pending
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 border space-y-4 w-full max-w-md">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7lUhpKtz301rnC4lmMkAkWudNrMNVZq4kFw&s"
                      alt=""
                      className="w-full h-24"
                    />
                    <div className="flex flex-row gap-2 mt-4">
                      <Button className="w-1/2 bg-slate-400 text-white text-sm font-medium px-3 py-2 rounded-md">
                        Received
                      </Button>
                      <Button className="w-1/2 bg-slate-400 text-white text-sm font-medium px-3 py-2 rounded-md">
                        Not Received
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="bg-white rounded-xl shadow-md p-6 border space-y-4 w-full max-w-md">
                    <div className="flex justify-between items-center border-b pb-2">
                      <div className="flex flex-col">
                        <p className="text-gray-500">USD ------</p>
                        <p className="text-sm text-gray-700">
                          Due: 23/Nov/2022
                        </p>
                      </div>
                      <div className="text-right ml-2">
                        <button className="bg-gray-100 p-2 rounded-md hover:text-blue-800 mt-1">
                          <p className="text-sm">Download Pdf</p>
                        </button>
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <div>
                        <p className="text-sm text-gray-500">Crew Number</p>
                        <p className="">03333428093</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Crew Name</p>
                        <p className="">Guillaume Agitny</p>
                      </div>
                      <div className="border-b mb-3">
                        <p className="text-sm text-gray-500">Amount Due</p>
                        <p className="mb-2">USD ---</p>
                      </div>
                      <button
                      onClick={() => setShowBankpage(true)}
                      className="w-full bg-slate-400 text-white text-sm font-medium px-3 py-2 rounded-md">
                        Direct Pay
                      </button>
                      <button
                        onClick={() => setShowBankForm(true)}
                        className="w-full bg-slate-400 text-white text-sm font-medium px-3 py-2 rounded-md"
                      >
                        Bank Transfer
                      </button>
                    </div>
                  </div>
                  {showBankForm && (
                    <BankTransferForm onClose={() => setShowBankForm(false)} />
                  )}
                  {showBankpage && (
                    <BankTransferPage onClose={() => setShowBankpage(false)} />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
