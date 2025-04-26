// import React, { useState } from 'react';

// const TripFourthPage = () => {
//   const [crewMembers, setCrewMembers] = useState([
//     // {
//     //   id: 1,
//     //   name: 'Harry',
//     //   clientDailyRate: 1500,
//     //   clientPerDiems: 150,
//     //   crewDailyRate: 1000,
//     //   crewPerDiems: 100,
//     //   vat: 10
//     // },
//     // {
//     //   id: 2,
//     //   name: 'Charlie',
//     //   clientDailyRate: 1500,
//     //   clientPerDiems: 150,
//     //   crewDailyRate: 1000,
//     //   crewPerDiems: 100,
//     //   vat: 10
//     // },
//     // {
//     //   id: 3,
//     //   name: 'Isabelle',
//     //   clientDailyRate: 1500,
//     //   clientPerDiems: 150,
//     //   crewDailyRate: 1000,
//     //   crewPerDiems: 100,
//     //   vat: 10
//     // }
//   ]);

//   const [expenses, setExpenses] = useState([
//     { id: 1, title: 'Atreari laundry', merchant: 'Star hotels', date: 'Aug 28, 2022', amount: 200, status: 'Approve' },
//     { id: 2, title: 'Atreari laundry', merchant: 'Star hotels', date: 'Aug 28, 2022', amount: 175, status: 'Approved' },
//     { id: 3, title: 'Atreari laundry', merchant: 'Star hotels', date: 'Aug 28, 2022', amount: 61, status: 'Approve' }
//   ]);

//   const [showAddMemberForm, setShowAddMemberForm] = useState(false);
//   const [newMember, setNewMember] = useState({
//     name: '',
//     clientDailyRate: '',
//     clientPerDiems: '',
//     crewDailyRate: '',
//     crewPerDiems: '',
//     vat: ''
//   });

//   const handleAddMember = () => {
//     setShowAddMemberForm(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewMember(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const memberWithId = {
//       ...newMember,
//       id: crewMembers.length + 1,
//       clientDailyRate: Number(newMember.clientDailyRate),
//       clientPerDiems: Number(newMember.clientPerDiems),
//       crewDailyRate: Number(newMember.crewDailyRate),
//       crewPerDiems: Number(newMember.crewPerDiems),
//       vat: Number(newMember.vat)
//     };
//     setCrewMembers([...crewMembers, memberWithId]);
//     setShowAddMemberForm(false);
//     setNewMember({
//       name: '',
//       clientDailyRate: '',
//       clientPerDiems: '',
//       crewDailyRate: '',
//       crewPerDiems: '',
//       vat: ''
//     });
//   };

//   const handleApproveExpense = (id) => {
//     setExpenses(expenses.map(expense =>
//       expense.id === id ? { ...expense, status: 'Approved' } : expense
//     ));
//   };

//   const calculateTotalExpense = () => {
//     return expenses.reduce((total, expense) => total + expense.amount, 0);
//   };

//   const calculateGrandTotal = () => {
//     // This seems to be a typo in your screenshot (613b), adjust as needed
//     return 613;
//   };

//   return (
//     <div className="container mx-auto px-4 ">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold">Crew list view</h2>
//         <button
//           onClick={handleAddMember}
//           className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
//         >
//           Add Member
//         </button>
//       </div>

//       {showAddMemberForm && (
//         <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
//           <h3 className="text-lg font-semibold mb-4">Add New Crew Member</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Crew Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={newMember.name}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">VAT (%):</label>
//                 <input
//                   type="number"
//                   name="vat"
//                   value={newMember.vat}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Client Daily Rate ($):</label>
//                 <input
//                   type="number"
//                   name="clientDailyRate"
//                   value={newMember.clientDailyRate}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Client Per Diems ($):</label>
//                 <input
//                   type="number"
//                   name="clientPerDiems"
//                   value={newMember.clientPerDiems}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Crew Daily Rate ($):</label>
//                 <input
//                   type="number"
//                   name="crewDailyRate"
//                   value={newMember.crewDailyRate}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">Crew Per Diems ($):</label>
//                 <input
//                   type="number"
//                   name="crewPerDiems"
//                   value={newMember.crewPerDiems}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex space-x-3">
//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setShowAddMemberForm(false)}
//                 className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       <div className="overflow-x-auto mb-8">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crew name</th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client Appendix 1</th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crew Member's Appendix A</th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VAT (Percentage)</th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {crewMembers.map((member) => (
//               <tr key={member.id}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   Daily rate ${member.clientDailyRate}<br />
//                   Per diems ${member.clientPerDiems}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   Daily rate ${member.crewDailyRate}<br />
//                   Per diems ${member.crewPerDiems}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.vat}% Total</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {/* Add action buttons here if needed */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="overflow-x-auto mb-8">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Merchant</th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attachment</th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {expenses.map((expense) => (
//               <tr key={expense.id}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{expense.title}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.merchant}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {/* Attachment would go here */}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.date}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">USD {expense.amount}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {expense.status === 'Approve' ? (
//                     <button
//                       onClick={() => handleApproveExpense(expense.id)}
//                       className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-xs"
//                     >
//                       Approve
//                     </button>
//                   ) : (
//                     <span className="text-green-600">Approved</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//             <tr className="bg-gray-50">
//               <td colSpan="4" className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Total Expense</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">USD {calculateTotalExpense()}</td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//             </tr>
//             <tr className="bg-gray-100">
//               <td colSpan="4" className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Grand Total Expense</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">USD {calculateGrandTotal()}</td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <tbody className="bg-white divide-y divide-gray-200">
//             <tr>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Total</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Daily rate --- USD</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per diems --- USD</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Daily rate --- USD</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Per diems --- USD</td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//             </tr>
//             <tr className="bg-gray-100">
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Grand Total</td>
//               <td colSpan="3" className="px-6 py-4 whitespace-nowrap"></td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">USD ---<button className="mx-10 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md">
//                   CREATE INVOICE
//                 </button></td>

//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TripFourthPage;

import React, { useState } from "react";
import CrewMemberFormModal from "../../../common/CrewMemberForm"; // Adjust the import path as necessary
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
const TripFourthPage = () => {
  const [crewMembers, setCrewMembers] = useState([
    // {
    //   id: 1,
    //   name: 'Harry',
    //   clientDailyRate: 1500,
    //   clientPerDiems: 150,
    //   crewDailyRate: 1000,
    //   crewPerDiems: 100,
    //   vat: 10
    // },
    // {
    //   id: 2,
    //   name: 'Charlie',
    //   clientDailyRate: 1500,
    //   clientPerDiems: 150,
    //   crewDailyRate: 1000,
    //   crewPerDiems: 100,
    //   vat: 10
    // },
    // {
    //   id: 3,
    //   name: 'Isabelle',
    //   clientDailyRate: 1500,
    //   clientPerDiems: 150,
    //   crewDailyRate: 1000,
    //   crewPerDiems: 100,
    //   vat: 10
    // }
  ]);

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Atreari laundry",
      merchant: "Star hotels",
      date: "Aug 28, 2022",
      amount: 200,
      status: "Approve",
    },
    {
      id: 2,
      title: "Atreari laundry",
      merchant: "Star hotels",
      date: "Aug 28, 2022",
      amount: 175,
      status: "Approved",
    },
    {
      id: 3,
      title: "Atreari laundry",
      merchant: "Star hotels",
      date: "Aug 28, 2022",
      amount: 61,
      status: "Approve",
    },
  ]);
  const crewType = ["Flight crew", "Cabin crew", "Maintenance"];
  const crewMember = [
    "Anupama Gupta",
    "Rahul Dev Verma",
    "Anubhav Kushwaha",
    "Prem Yadav",
    "Saurabh Tiwari",
    "Raju Singh",
  ];

  const [showModal, setShowModal] = useState(false);
  const [newMember, setNewMember] = useState({
    type: "",
    role: "",
    clientDailyRate: "",
    clientPerDiems: "",
    crewDailyRate: "",
    crewPerDiems: "",
    // vat: "",
  });

  const handleAddMember = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewMember({
      name: "",
      clientDailyRate: "",
      clientPerDiems: "",
      crewDailyRate: "",
      crewPerDiems: "",
      vat: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const memberWithId = {
      ...newMember,
      id: crewMembers.length + 1,
      clientDailyRate: parseInt(newMember.clientDailyRate),
      clientPerDiems: parseInt(newMember.clientPerDiems),
      crewDailyRate: parseInt(newMember.crewDailyRate),
      crewPerDiems: parseInt(newMember.crewPerDiems),
      vat: parseInt(newMember.vat),
    };
    setCrewMembers([...crewMembers, memberWithId]);
    closeModal();
  };

  const handleApproveExpense = (id) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === id ? { ...expense, status: "Approved" } : expense
      )
    );
  };
  const updateFormData = (field, value) => {
    setNewMember((prev) => ({ ...prev, [field]: value }));
  };

  const calculateTotalExpense = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const calculateGrandTotal = () => {
    return 613; // Adjust as needed
  };

  return (
    <div className="container mx-auto   relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Crew list view</h2>
        <div
          onClick={handleAddMember}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Add Member
        </div>
      </div>

      {/* Modal Backdrop */}
      <CrewMemberFormModal
        isOpen={showModal}
        onClose={closeModal}
        onSubmit={handleSubmit}
        newMember={newMember}
        handleInputChange={handleInputChange}
        updateFormData={updateFormData}
        crewType={crewType}
        crewMember={crewMember}
      />

      <div className="overflow-x-auto mb-8">
        <table
          className="min-w-full divide-y divide-gray-200"
          style={{ backgroundColor: "#F2F2F2" }}
        >
          <thead style={{ backgroundColor: "#F2F2F2" }}>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Crew name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Client Appendix 1
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Crew Member's Appendix A
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                VAT (Percentage)
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {crewMembers.map((member) => (
              <tr key={member.id} style={{ backgroundColor: "#F2F2F2" }}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {member.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Daily rate ${member.clientDailyRate}
                  <br />
                  Per diems ${member.clientPerDiems}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Daily rate ${member.crewDailyRate}
                  <br />
                  Per diems ${member.crewPerDiems}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {member.vat}% Total
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <IconButton onClick={() => handleDelete(member.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={(e) => handleMenuClick(e, member.id)}>
                    <MoreVertIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto mb-8 px-8 py-8   ">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className=" ">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Merchant
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Attachment
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {expense.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {expense.merchant}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {/* Attachment would go here */}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {expense.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  USD {expense.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {expense.status === "Approve" ? (
                    <button
                      onClick={() => handleApproveExpense(expense.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-xs"
                    >
                      Approve
                    </button>
                  ) : (
                    <span className="text-green-600">Approved</span>
                  )}
                </td>
              </tr>
            ))}
            <tr style={{ backgroundColor: "#FFFFFF" }}>
              <td
                colSpan="4"
                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                Total Expense
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                USD {calculateTotalExpense()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>
            <tr style={{ backgroundColor: "#828282" }}>
              <td
                colSpan="4"
                className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900"
              >
                Grand Total Expense
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                USD {calculateGrandTotal()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr style={{ backgroundColor: "#E0E0E0" }}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Total
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Daily rate --- USD
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Per diems --- USD
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Daily rate --- USD
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Per diems --- USD
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>
            <tr style={{ backgroundColor: "#333333" }}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">
                Grand Total
              </td>
              <td colSpan="3" className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">
                USD ---
                <button className="ml-10 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md">
                  CREATE INVOICE
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TripFourthPage;
