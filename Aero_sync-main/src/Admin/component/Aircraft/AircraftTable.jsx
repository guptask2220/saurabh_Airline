// // // components/AircraftTable.jsx
// // import { useState } from 'react';
// // import { FiMoreVertical, FiTrash2 } from 'react-icons/fi';

// // const AircraftTable = ({ aircrafts, onDelete }) => {
// //   const [openDropdownId, setOpenDropdownId] = useState(null);

// //   const toggleDropdown = (id) => {
// //     setOpenDropdownId(openDropdownId === id ? null : id);
// //   };

// //   return (
// //     <div className="overflow-x-auto">
// //       <table className="min-w-full divide-y divide-gray-200">
// //         <thead className="bg-gray-50">
// //           <tr>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operator</th>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Number</th>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
// //           </tr>
// //         </thead>
// //         <tbody className="bg-white divide-y divide-gray-200">
// //           {aircrafts.map((aircraft) => (
// //             <tr key={aircraft.id}>
// //               <td className="px-6 py-4 whitespace-nowrap">
// //                 <img 
// //                   src={aircraft.photoUrl} 
// //                   alt={aircraft.registrationNumber} 
// //                   className="h-10 w-10 rounded-full object-cover"
// //                 />
// //               </td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.client}</td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.owner}</td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.operator}</td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.type}</td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.registrationNumber}</td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative">
// //                 <button 
// //                   onClick={() => toggleDropdown(aircraft.id)}
// //                   className="text-gray-400 hover:text-gray-600"
// //                 >
// //                   <FiMoreVertical />
// //                 </button>
                
// //                 {openDropdownId === aircraft.id && (
// //                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
// //                     <div className="py-1">
// //                       <button
// //                         onClick={() => {
// //                           onDelete(aircraft.id);
// //                           setOpenDropdownId(null);
// //                         }}
// //                         className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
// //                       >
// //                         <FiTrash2 className="mr-2" />
// //                         Delete
// //                       </button>
// //                     </div>
// //                   </div>
// //                 )}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default AircraftTable;




// // components/AircraftTable.jsx
// import { useState } from 'react';
// import { FiMoreVertical, FiTrash2, FiEdit } from 'react-icons/fi';

// const AircraftTable = ({ aircrafts, onDelete, onEdit }) => {
//   const [openDropdownId, setOpenDropdownId] = useState(null);

//   const toggleDropdown = (id) => {
//     setOpenDropdownId(openDropdownId === id ? null : id);
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operator</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Number</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {aircrafts.map((aircraft) => (
//             <tr key={aircraft.id}>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <img 
//                   src={aircraft.photoUrl} 
//                   alt={aircraft.registrationNumber} 
//                   className="h-10 w-10 rounded-full object-cover"
//                 />
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.client}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.owner}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.operator}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.type}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.registrationNumber}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative">
//                 <div className="flex flex-row items-center space-y-2 gap-4">
//                   {/* Delete Icon */}
//                   <button
//                     onClick={() => onDelete(aircraft.id)}
//                     className="text-red-600 hover:text-red-800 mt-2"
//                   >
//                     <FiTrash2 size={18} />
//                   </button>

//                   {/* 3-dot Icon */}
//                   <button
//                     onClick={() => toggleDropdown(aircraft.id)}
//                     className="text-gray-600 hover:text-black"
//                   >
//                     <FiMoreVertical size={18} />
//                   </button>
//                 </div>

//                 {/* Dropdown for Edit */}
//                 {openDropdownId === aircraft.id && (
//                   <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg z-10">
//                     <button
//                       onClick={() => {
//                         onEdit(aircraft.id);
//                         setOpenDropdownId(null);
//                       }}
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
//                     >
//                       <FiEdit className="mr-2" />
//                       Edit
//                     </button>
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AircraftTable;


// components/AircraftTable.jsx
import { useState } from 'react';
import { FiMoreVertical, FiTrash2, FiEdit } from 'react-icons/fi';

const AircraftTable = ({ aircrafts, onDelete, onEdit, isAdmin = true }) => {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {isAdmin && (
              <>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              </>
            )}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operator</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Number</th>
            {isAdmin && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {aircrafts.map((aircraft) => (
            <tr key={aircraft.id}>
              {isAdmin && (
                <>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img 
                      src={aircraft.photoUrl} 
                      alt={aircraft.registrationNumber} 
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.client}</td>
                </>
              )}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.owner}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.operator}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{aircraft.registrationNumber}</td>
              {isAdmin && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative">
                  <div className="flex flex-row items-center space-y-2 gap-4">
                    {/* Delete Icon */}
                    <button
                      onClick={() => onDelete(aircraft.id)}
                      className="text-red-600 hover:text-red-800 mt-2"
                    >
                      <FiTrash2 size={18} />
                    </button>

                    {/* 3-dot Icon */}
                    <button
                      onClick={() => toggleDropdown(aircraft.id)}
                      className="text-gray-600 hover:text-black"
                    >
                      <FiMoreVertical size={18} />
                    </button>
                  </div>

                  {/* Dropdown for Edit */}
                  {openDropdownId === aircraft.id && (
                    <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg z-10">
                      <button
                        onClick={() => {
                          onEdit(aircraft.id);
                          setOpenDropdownId(null);
                        }}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                      >
                        <FiEdit className="mr-2" />
                        Edit
                      </button>
                    </div>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AircraftTable;
