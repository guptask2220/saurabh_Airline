// import { useNavigate } from "react-router-dom";
// import TripSteps from "./TripSteps";
// export default function TripFirstPage({ nextStep }) {
//   const navigate = useNavigate();

//   const steps = [
//     { step: "Step 01", title: "Basic Details", path: "/trip/step-1" },
//     { step: "Step 02", title: "Aircraft", path: "/trip/step-2" },
//     { step: "Step 03", title: "Crew Members", path: "/trip/step-3" },
//     { step: "Step 04", title: "Payment", path: "/trip/step-4" },
//   ];

//   return (
//     <div className="p-6  ">
//         {/* <TripSteps /> */}
//       {/* Step Box Navigation */}
//       <div className="flex gap-4 mb-4">
//         {/* Input with border */}
//         <input
//           type="text"
//           placeholder="Trip name"
//           className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-500"
//         />

//         {/* Select with custom styles */}
//         <div className="relative w-full">
//           <select className="w-full appearance-none border border-gray-300 rounded px-3 py-2 pr-8 text-left placeholder-gray-500">
//             <option>Client</option>
//           </select>
//           {/* Custom down arrow */}
//           <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
//             ▼
//           </div>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="space-y-4">
//         <div className="flex gap-4 rounded-md">
//           {/* Select Box with custom arrow and individual border */}
//           <div className="relative w-full">
//             <select className="w-full appearance-none border border-gray-300 rounded px-3 py-2 pr-8 text-left placeholder-gray-500">
//               <option>Aircraft type</option>
//             </select>
//             <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
//               ▼
//             </div>
//           </div>
//           {/* Trip Name Input with individual border */}
//           <input
//             type="text"
//             placeholder="Aircraft Owner"
//             className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-500"
//           />
//         </div>

//         <input
//           type="text"
//           placeholder="Aircraft registration"
//           className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-500"
//         />

//         <div className="flex gap-4">
//           <input
//             type="text"
//             placeholder="Fees"
//             className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-500"
//           />
//           <input
//             type="text"
//             placeholder="Percentage"
//             className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-500"
//           />
//         </div>
//         <div className="flex gap-4">
//           <label className="relative w-full cursor-pointer">
//             <input
//               type="file"
//               className="hidden"
//               onChange={(e) => console.log(e.target.files[0])}
//             />
//             <div className="border border-gray-300 rounded px-3 py-2 pr-10 placeholder-gray-500 w-full">
//               Upload Agreement
//             </div>
//             <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//               📤
//             </span>
//           </label>
//         </div>

//         {/* <div className="flex items-center gap-2">
//           <span className="text-gray-600">Upload Agreement</span>
//           <input type="file" className="input-styled" />

//         </div> */}

//         <input type="text" placeholder="Address" className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-500" />
//         <textarea
//           placeholder="Description"
//           className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-500"
//         />

//         <div className="flex justify-between">
//           <button className="text-gray-600">Cancel</button>
//           <button
//             onClick={nextStep}
//             className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // For React Router v6, if you're using v5, use `useHistory`
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const FirstColumn = () => {
//   const tabs = ["Basic detail", "Date & Route", "Aircraft", "Crew Member"];
//   const [activeTab, setActiveTab] = useState("Basic detail");

//   const [formData, setFormData] = useState({
//     client: "",
//     tripName: "",
//     approveExpenses: false,
//     fees: "",
//     percentage: "",
//     description: "",
//   });

//   const [selectedClient, setSelectedClient] = useState("Client");

//   const navigate = useNavigate(); // Use useNavigate hook to navigate between pages

//   const handleSelect = (client) => {
//     setSelectedClient(client);
//     setFormData({ ...formData, client });
//   };

//   const handleCreate = () => {
//     // Navigate to the second page (for example: '/second-page')
//     navigate("/second-page"); // Replace with the path of your second page

//     // Set the active tab to "Date & Route"
//     setActiveTab("Date & Route");
//   };

//   return (
//     <div className="w-full max-w-2xl p-4 space-y-4">
//       {/* Tabs */}
//       <div className="flex space-x-6 border-b">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-2 font-medium ${
//               activeTab === tab
//                 ? "border-b-2 border-black font-semibold"
//                 : "text-gray-500"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Form */}
//       <div className="space-y-4">
//         {/* Trip Name */}
//         <div>
//           <input
//             type="text"
//             value={formData.tripName}
//             onChange={(e) =>
//               setFormData({ ...formData, tripName: e.target.value })
//             }
//             className="w-full border rounded p-2"
//             placeholder="Trip name"
//           />
//         </div>

//         {/* Client Dropdown and Toggle */}
//         <div className="flex items-center space-x-4 bg-slate-100 p-3 rounded">
//           {/* Dropdown */}
//           <div className="w-1/2">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <div className="relative w-full cursor-pointer">
//                   <div className="w-full appearance-none border border-gray-300 rounded px-3 py-2 pr-8 text-left bg-white">
//                     {selectedClient}
//                   </div>
//                   <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
//                     <ChevronDown size={16} />
//                   </div>
//                 </div>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-full">
//                 <DropdownMenuItem onClick={() => handleSelect("Client A")}>
//                   Client A
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => handleSelect("Client B")}>
//                   Client B
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>

//           {/* Toggle */}
//           <div className="flex items-center space-x-2">
//             <p>Approve & reject crew expenses</p>
//             <label className="inline-flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={formData.approveExpenses}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     approveExpenses: e.target.checked,
//                   })
//                 }
//               />
//               <div className="w-11 h-6 bg-gray-300 peer-checked:bg-black rounded-full transition-colors duration-200 ease-in-out relative">
//                 <div className="absolute bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out left-1 top-1 peer-checked:translate-x-5" />
//               </div>
//             </label>
//           </div>
//         </div>

//         {/* Fees and Percentage */}
//         <div className="flex space-x-4">
//           <div className="w-1/2">
//             <input
//               type="number"
//               value={formData.fees}
//               placeholder="Fees"
//               onChange={(e) =>
//                 setFormData({ ...formData, fees: e.target.value })
//               }
//               className="w-full border rounded p-2"
//             />
//           </div>
//           <div className="w-1/2">
//             <input
//               type="number"
//               value={formData.percentage}
//               placeholder="Percentage"
//               onChange={(e) =>
//                 setFormData({ ...formData, percentage: e.target.value })
//               }
//               className="w-full border rounded p-2"
//             />
//           </div>
//         </div>

//         {/* Description */}
//         <div>
//           <textarea
//             rows="3"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({ ...formData, description: e.target.value })
//             }
//             className="w-full border rounded p-2"
//             placeholder="Write description..."
//           />
//           <Button
//   onClick={handleCreate}
//   className=" relative mr-5 bg-slate-100 hover:bg-black text-black hover:text-white font-medium py-2 px-4 rounded transition-colors duration-200 ease-in-out"
// >
//   Create
// </Button>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default FirstColumn;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import TripSteps from "../Trip/TripSteps"; // ✅ Your step navigation component

// const FirstColumn = () => {
//   const tabs = ["Basic detail", "Date & Route", "Aircraft", "Crew Member"];
//   const [activeTab, setActiveTab] = useState("Basic detail");

//   const [formData, setFormData] = useState({
//     client: "",
//     tripName: "",
//     approveExpenses: false,
//     fees: "",
//     percentage: "",
//     description: "",
//   });

//   const [selectedClient, setSelectedClient] = useState("Client");

//   const navigate = useNavigate();

//   const handleSelect = (client) => {
//     setSelectedClient(client);
//     setFormData({ ...formData, client });
//   };

//   const handleCreate = () => {
//     // You could validate form data here if needed
//     navigate("/second-page");
//     setActiveTab("Date & Route");
//   };

//   return (
//     <div className="w-full max-w-2xl p-4 space-y-4">
//       {/* Step Navigation */}
//       <TripSteps tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

//       {/* Form Section */}
//       <div className="space-y-4">
//         {/* Trip Name */}
//         <input
//           type="text"
//           value={formData.tripName}
//           onChange={(e) =>
//             setFormData({ ...formData, tripName: e.target.value })
//           }
//           className="w-full border rounded p-2"
//           placeholder="Trip name"
//         />

//         {/* Client Dropdown & Toggle */}
//         <div className="flex items-center space-x-4 bg-slate-100 p-3 rounded">
//           {/* Client Dropdown */}
//           <div className="w-1/2">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <div className="relative w-full cursor-pointer">
//                   <div className="w-full appearance-none border border-gray-300 rounded px-3 py-2 pr-8 text-left bg-white">
//                     {selectedClient}
//                   </div>
//                   <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
//                     <ChevronDown size={16} />
//                   </div>
//                 </div>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-full">
//                 <DropdownMenuItem onClick={() => handleSelect("Client A")}>
//                   Client A
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => handleSelect("Client B")}>
//                   Client B
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>

//           {/* Toggle Switch */}
//           <div className="flex items-center space-x-2">
//             <p>Approve & reject crew expenses</p>
//             <label className="inline-flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={formData.approveExpenses}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     approveExpenses: e.target.checked,
//                   })
//                 }
//               />
//               <div className="w-11 h-6 bg-gray-300 peer-checked:bg-black rounded-full transition-colors duration-200 ease-in-out relative">
//                 <div className="absolute bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out left-1 top-1 peer-checked:translate-x-5" />
//               </div>
//             </label>
//           </div>
//         </div>

//         {/* Fees and Percentage */}
//         <div className="flex space-x-4">
//           <input
//             type="number"
//             value={formData.fees}
//             placeholder="Fees"
//             onChange={(e) =>
//               setFormData({ ...formData, fees: e.target.value })
//             }
//             className="w-1/2 border rounded p-2"
//           />
//           <input
//             type="number"
//             value={formData.percentage}
//             placeholder="Percentage"
//             onChange={(e) =>
//               setFormData({ ...formData, percentage: e.target.value })
//             }
//             className="w-1/2 border rounded p-2"
//           />
//         </div>

//         {/* Description */}
//         <textarea
//           rows="3"
//           value={formData.description}
//           onChange={(e) =>
//             setFormData({ ...formData, description: e.target.value })
//           }
//           className="w-full border rounded p-2"
//           placeholder="Write description..."
//         />

//         {/* Submit Button */}
//         <Button
//           onClick={handleCreate}
//           className="bg-slate-100 hover:bg-black text-black hover:text-white font-medium py-2 px-4 rounded transition-colors duration-200 ease-in-out"
//         >
//           Create
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default FirstColumn;

// import { ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// const TripFirstPage = ({ tripData = {}, updateTripData, nextStep }) => {
//   // Initialize with default values if tripData is undefined
//   const [selectedClient, setSelectedClient] = useState(tripData.client || "Client");

//   // Ensure all required fields have defaults
//   const formData = {
//     tripName: tripData.tripName || "",
//     client: tripData.client || "",
//     approveExpenses: tripData.approveExpenses || false,
//     fees: tripData.fees || "",
//     percentage: tripData.percentage || "",
//     description: tripData.description || "",
//     ...tripData // Spread any additional properties
//   };

//   const handleSelect = (client) => {
//     setSelectedClient(client);
//     updateTripData("client", client);
//   };

//   return (
//     <div className="space-y-4">
//       {/* Trip Name */}
//       <input
//         type="text"
//         value={formData.tripName}
//         onChange={(e) => updateTripData("tripName", e.target.value)}
//         className="w-full border rounded p-2"
//         placeholder="Trip name"
//       />

//       {/* Client Dropdown & Toggle */}
//       <div className="flex items-center space-x-4 bg-slate-100 p-3 rounded">
//         {/* Client Dropdown */}
//         <div className="w-1/2">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <div className="relative w-full cursor-pointer">
//                 <div className="w-full appearance-none border border-gray-300 rounded px-3 py-2 pr-8 text-left bg-white">
//                   {selectedClient}
//                 </div>
//                 <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
//                   <ChevronDown size={16} />
//                 </div>
//               </div>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="w-full">
//               <DropdownMenuItem onClick={() => handleSelect("Client A")}>
//                 Client A
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => handleSelect("Client B")}>
//                 Client B
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>

//         {/* Toggle Switch */}
//         <div className="flex items-center space-x-2">
//           <p>Approve & reject crew expenses</p>
//           <label className="inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="sr-only peer"
//               checked={formData.approveExpenses}
//               onChange={(e) =>
//                 updateTripData("approveExpenses", e.target.checked)
//               }
//             />
//             <div className="w-11 h-6 bg-gray-300 peer-checked:bg-black rounded-full transition-colors duration-200 ease-in-out relative">
//               <div className="absolute bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out left-1 top-1 peer-checked:translate-x-5" />
//             </div>
//           </label>
//         </div>
//       </div>

//       {/* Fees and Percentage */}
//       <div className="flex space-x-4">
//         <input
//           type="number"
//           value={formData.fees}
//           placeholder="Fees"
//           onChange={(e) => updateTripData("fees", e.target.value)}
//           className="w-1/2 border rounded p-2"
//         />
//         <input
//           type="number"
//           value={formData.percentage}
//           placeholder="Percentage"
//           onChange={(e) => updateTripData("percentage", e.target.value)}
//           className="w-1/2 border rounded p-2"
//         />
//       </div>

//       {/* Description */}
//       <textarea
//         rows="3"
//         value={formData.description}
//         onChange={(e) => updateTripData("description", e.target.value)}
//         className="w-full border rounded p-2"
//         placeholder="Write description..."
//       />

//       {/* Submit Button */}
//       <Button
//         onClick={nextStep}
//         className="bg-slate-100 hover:bg-black text-black hover:text-white font-medium py-2 px-4 rounded transition-colors duration-200 ease-in-out"
//       >
//         Create
//       </Button>
//     </div>
//   );
// };

// export default TripFirstPage;

//----- we are begining Here ----//

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import SingleSelectDropdown from "@/common/MultiDropdownMenu";
const TripFirstPage = ({ formData, updateFormData, nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };
  const clientOptions = [
    "Anup",
    "Rahul",
    "Anubhav",
    "Prem",
    "Saurabh",
    "Raju",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <input
            type="text"
            value={formData.tripName}
            placeholder="Trip name*"
            onChange={(e) => updateFormData("tripName", e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div className="flex items-center space-x-4 bg-slate-100 p-3 rounded">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="relative w-full cursor-pointer">
                <div className="w-full appearance-none border border-gray-300 rounded px-3 py-2 pr-8 text-left bg-white">
                  {formData.client || ' Client *'}
                </div>
                <div className=" bg-black"></div>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <ChevronDown size={16} />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem onClick={() => updateFormData('client', 'Client A')}>
                Client A
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateFormData('client', 'Client B')}>
                Client B
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          {/* //--new is above */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="relative w-full  cursor-pointer">
                <div className="w-full appearance-none border border-gray-300 rounded px-3 py-2 pr-8 text-left bg-white">
                  {formData.client || "Client *"}
                </div>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <ChevronDown size={16} />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem
                onClick={() => updateFormData("client", "Client A")}
              >
                Client A
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => updateFormData("client", "Client B")}
              >
                Client B
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <SingleSelectDropdown
            options={clientOptions}
            selectedItem={formData.client}
            onSelect={(item) => updateFormData("client", item)}
            label="Client *"/>

          <div className="flex items-center w-fit justify-between">
            <label className="text-sm font-medium text-gray-700">
              Approve & reject crew expenses
            </label>
            {/* <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={formData.approveExpenses}
                onChange={(e) =>
                  updateFormData("approveExpenses", e.target.checked)
                }
              />
              <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-colors duration-200 ease-in-out relative">
                <div className="absolute bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out left-1 top-1 peer-checked:translate-x-5" />
              </div>
            </label> */}
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={document.autoAttach}
                  onChange={() => onToggleAutoAttach(document.id)}
                  className="sr-only peer "
                />
                <div className="w-11 h-6 bg-[#828282] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="number"
              value={formData.fees}
              placeholder="Fees"
              onChange={(e) => updateFormData("fees", e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <input
              type="number"
              value={formData.percentage}
              placeholder="Percentage"
              onChange={(e) => updateFormData("percentage", e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        <div>
          <textarea
            rows={3}
            value={formData.description}
            placeholder="Description"
            onChange={(e) => updateFormData("description", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          className="bg-slate-500 hover:bg-blue-700 text-white"
        >
          Create
        </Button>
      </div>
    </form>
  );
};

export default TripFirstPage;
