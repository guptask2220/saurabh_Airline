import React, { useState } from "react";
import { Button } from "../components/ui/button";

const BankTransferForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Crew Member Bank Details</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bank</label>
            <input
              type="text"
              defaultValue="Standard Chartered"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bank Address</label>
            <input
              type="text"
              defaultValue="3517 W.Gray St.Utica,Pennsylvania 57867"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
            <input
              type="text"
              defaultValue="23676546094727634"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">IBAN</label>
            <input
              type="text"
              defaultValue="DUB1C8L000000435435667652343"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            Cancel
          </Button>
          <Button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
export default BankTransferForm;