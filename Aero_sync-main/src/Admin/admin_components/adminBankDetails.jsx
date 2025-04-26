import { useState } from 'react';
import { FaPlus, FaEllipsisV, FaUniversity } from 'react-icons/fa';
import BankForm from '../component/BankDetails/BankForm';

const BankManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const transactions = [
    { tripName: 'ACC 124', amount: 900.00, date: '15 May 2020 9:00 am' },
    { tripName: 'ACC 124', amount: 10.00, date: '15 May 2020 8:30 am' },
    { tripName: 'ACC 124', amount: 900.00, date: '15 May 2020 9:30 am' },
    { tripName: 'ACC 124', amount: 10.00, date: '15 May 2020 8:00 am' },
    { tripName: 'ACC 124', amount: 75.00, date: '15 May 2020 8:00 am' },
    { tripName: 'ACC 124', amount: 200.00, date: '15 May 2020 8:30 am' },
    { tripName: 'ACC 124', amount: 15.00, date: '15 May 2020 9:00 am' },
    { tripName: 'ACC 124', amount: 5.00, date: '15 May 2020 9:00 am' },
    { tripName: 'ACC 124', amount: 55.00, date: '15 May 2020 9:30 am' },
    { tripName: 'ACC 124', amount: 100.00, date: '15 May 2020 9:00 am' }
  ];

  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  const handleSubmit = (formData) => {
    // Here you would typically send the data to an API
    console.log('Bank details submitted:', formData);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Bank detail</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          <FaPlus /> Add New Bank Detail
        </button>
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Panel (30%) */}
        <div className="w-full h-1/2 md:w-1/4">
          <div className="bg-white rounded-lg shadow-sm p-6 relative h-full">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <FaEllipsisV />
            </button>
            
            <div className="flex flex-col items-start mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 mb-3">
                <FaUniversity size={20} />
              </div>
              <h2 className="text-lg font-semibold">Bank transfer detail</h2>
              <p className="text-gray-600">Standard Chartered</p>
              <p className="text-gray-400 text-sm">Last update 5 days ago</p>
            </div>
            
            <div className="border-t border-gray-200 my-4"></div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={isActive}
                  onChange={() => setIsActive(!isActive)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Panel (70%) */}
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Transition History</h2>
            <p className="text-gray-800 font-medium">Total Amount: ${totalAmount.toFixed(2)}</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trip name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.tripName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${transaction.amount.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Bank Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <BankForm 
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
            formTitle="Add New Bank"
          />
        </div>
      )}
    </div>
  );
};

export default BankManagement;