// // components/AircraftForm.jsx
// import { useState } from 'react';
// import { FiUpload, FiX } from 'react-icons/fi';
// import SelectInput from '@mui/material/Select/SelectInput';
// const AircraftForm = ({ config, onSubmit, onCancel }) => {
//   const aircraftTypes = [
//     "Airbus A220-300",
//     "Boeing 727-100",
//     "Boeing 747-300M",
//     "Boeing 727-200",
//     "Beechcraft Baron /58 Baron",
//     "Airbus A321 (sharklets)",
//   ];
//   const [formData, setFormData] = useState({});
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setFormData(prev => ({ ...prev, photo: file }));
//     }
//   };

//   const removeFile = () => {
//     setSelectedFile(null);
//     setFormData(prev => ({ ...prev, photo: null }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <div className="bg-white rounded-lg  p-6">
//       <h2 className="text-xl font-semibold mb-6">{config.title}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="space-y-4">
//           {config.fields.map((field) => (
//             <div key={field.name} className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">
//                 {field.label}
//                 {field.required && <span className="text-red-500">*</span>}
//               </label>

//               {field.type === 'select' ? (
//                 <select
//                   name={field.name}
//                   required={field.required}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">{field.placeholder}</option>
//                   {field.options.map(option => (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//               ) : field.type === 'file' ? (
//                 <div>
//                   <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
//                     <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                       <FiUpload className="w-8 h-8 mb-3 text-gray-400" />
//                       <p className="mb-2 text-sm text-gray-500">
//                         <span className="font-semibold">{field.uploadText}</span>
//                       </p>
//                     </div>
//                     <input
//                       type="file"
//                       className="hidden"
//                       accept={field.accept}
//                       onChange={handleFileChange}
//                     />
//                   </label>
//                   {selectedFile && (
//                     <div className="mt-2 flex items-center justify-between bg-gray-100 p-2 rounded">
//                       <span className="text-sm truncate">{selectedFile.name}</span>
//                       <button
//                         type="button"
//                         onClick={removeFile}
//                         className="text-gray-500 hover:text-gray-700"
//                       >
//                         <FiX />
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   required={field.required}
//                   placeholder={field.placeholder}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="mt-6 flex justify-end space-x-3">
//           {config.buttons.map((button) => (
//             <button
//               key={button.label}
//               type={button.type}
//               onClick={button.type === 'button' ? onCancel : null}
//               className={`px-4 py-2 rounded-md ${
//                 button.variant === 'primary'
//                   ? 'bg-blue-600 text-white hover:bg-blue-700'
//                   : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
//               }`}
//             >
//               {button.label}
//             </button>
//           ))}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AircraftForm;

import { useState } from "react";
import { FiUpload, FiX } from "react-icons/fi";
import SingleSelectDropdown from "./MultiDropdownMenu";
const AircraftForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const aircraftTypes = [
    "Airbus A220-300",
    "Boeing 727-100",
    "Boeing 747-300M",
    "Boeing 727-200",
    "Beechcraft Baron 58",
    "Airbus A321 (Sharklets)",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFormData((prev) => ({ ...prev, photo: file }));
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFormData((prev) => ({ ...prev, photo: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Aircraft detail</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Aircraft Owner */}
        <div className="">
          {/* <label className="block text-sm font-medium text-gray-700">
            Aircraft owner<span className="text-red-500">*</span>
          </label> */}
          <input
            type="text"
            name="owner"
            required
            placeholder="Aircraft owner"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Aircraft Operator */}
        <div className="">
          {/* <label className="block text-sm font-medium text-gray-700">
            Aircraft operator<span className="text-red-500">*</span>
          </label> */}
          <input
            type="text"
            name="operator"
            required
            placeholder="Aircraft operator"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Aircraft Type */}
        <SingleSelectDropdown
          options={aircraftTypes}
          selectedItem={formData.type}
          onSelect={(value) =>
            setFormData((prev) => ({ ...prev, type: value }))
          }
          label="Type *"
        />

        {/* Registration Number */}
        <div className="">
          {/* <label className="block text-sm font-medium text-gray-700">
            Registration Number<span className="text-red-500">*</span>
          </label> */}
          <input
            type="text"
            name="registrationNumber"
            required
            placeholder="Registration number"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Aircraft Photo Upload */}
        <div className="">
          {/* <label className="block text-sm font-medium text-gray-700">
            Aircraft photo<span className="text-red-500">*</span>
          </label> */}
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <FiUpload className="w-8 h-8 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">
                  Choose file or drag it here
                </span>
              </p>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </label>
          {selectedFile && (
            <div className="mt-2 flex items-center justify-between bg-gray-100 p-2 rounded">
              <span className="text-sm truncate">{selectedFile.name}</span>
              <button
                type="button"
                onClick={removeFile}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX />
              </button>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AircraftForm;
