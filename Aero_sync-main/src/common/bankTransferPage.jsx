import React, { useState } from "react";
import { Button } from "../components/ui/button";

const PaymentMethodSelector = ({ onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "1234 1234 1234 1234",
    expiration: "",
    country: "Pakistan"
  });

  const paymentMethods = [
    { id: "card", name: "Card" },
    { id: "klarna", name: "Klarna" },
    { id: "affirm", name: "Affirm" },
    { id: "afterpay", name: "Afterpay" }
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>
      
      {/* Payment Method Options */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            className={`p-3 border rounded-lg text-center transition-all ${
              selectedMethod === method.id
                ? "border-blue-500 ring-2 ring-blue-200 bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            {method.name}
          </button>
        ))}
      </div>

      {/* Card Details Form */}
      {selectedMethod === "card" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card number
            </label>
            <input
              type="text"
              value={cardDetails.cardNumber}
              onChange={(e) => setCardDetails({...cardDetails, cardNumber: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="1234 1234 1234 1234"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiration (MM/YY)
              </label>
              <input
                type="text"
                value={cardDetails.expiration}
                onChange={(e) => setCardDetails({...cardDetails, expiration: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select
                value={cardDetails.country}
                onChange={(e) => setCardDetails({...cardDetails, country: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option>Pakistan</option>
                <option>United Arab Emirates</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-10 h-6 bg-blue-100 flex items-center justify-center rounded">
              <span className="text-xs font-bold text-blue-800">VISA</span>
            </div>
            <span className="text-sm text-gray-500">Secure payment</span>
          </div>
        </div>
      )}

      <div className="flex justify-end space-x-3 mt-6">
        <Button 
          variant="outline" 
          onClick={onClose}
          className="border-gray-300"
        >
          Cancel
        </Button>
        <Button className="bg-blue-600 text-white">
          Confirm Payment
        </Button>
      </div>
    </div>
  );
};
export default PaymentMethodSelector