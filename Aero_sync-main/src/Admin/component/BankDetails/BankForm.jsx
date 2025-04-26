import { useState } from 'react';
import FloatingLabelSelect from './FloatingLabelSelect';

const FloatingLabelInput = ({ 
  id, 
  name, 
  value, 
  onChange, 
  label, 
  required = false, 
  type = 'text' 
}) => {
  const [isFocused, setIsFocused] = useState(false);
//   const bankOptions = [
//     "State Bank of India",
//     "Punjab National Bank",
//     "Bank of Baroda",
//     "HDFC Bank",
//     "Axis Bank",
//     "ICICI Bank",
//     "Kotak Mahindra Bank",
//     "Canara Bank",
//   ];

  return (
    <div className="relative mt-6">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => !value && setIsFocused(false)}
        className={`w-full px-3 py-2 border ${isFocused || value ? 'border-green-500' : 'border-gray-300'} rounded-md peer focus:outline-none focus:ring-2 focus:ring-green-500`}
        required={required}
      />
      <label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-200 pointer-events-none ${
          isFocused || value 
            ? '-top-2.5 text-xs bg-white px-1 text-green-600'
            : 'top-2 text-gray-500'
        }`}
      >
        {label}{required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};

const BankForm = ({ 
  initialValues = {}, 
  onSubmit, 
  onCancel,
  formTitle = "Bank Details"
}) => {
  const [bankDetails, setBankDetails] = useState({
    title: initialValues.title || '',
    bank: initialValues.bank || '',
    accountNumber: initialValues.accountNumber || '',
    iban: initialValues.iban || '',
    bicCode: initialValues.bicCode || '',
    address: initialValues.address || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBankDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(bankDetails);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
      <div className="flex justify-between items-center border-b border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900">{formTitle}</h3>
        <button 
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-500 text-2xl"
        >
          &times;
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-6">
        <FloatingLabelInput
          id="title"
          name="title"
          value={bankDetails.title}
          onChange={handleInputChange}
          label="Title"
          required
        />
        
        <FloatingLabelSelect
  id="bank"
  name="bank"
  value={bankDetails.bank}
  onChange={handleInputChange}
  label="Bank"
  required
  options={[
    "State Bank of India",
    "Punjab National Bank",
    "Bank of Baroda",
    "HDFC Bank",
    "Axis Bank",
    "ICICI Bank",
    "Kotak Mahindra Bank",
    "Canara Bank"
  ]}
/>

        
        <FloatingLabelInput
          id="accountNumber"
          name="accountNumber"
          value={bankDetails.accountNumber}
          onChange={handleInputChange}
          label="Account Number"
          required
        />
        
        <FloatingLabelInput
          id="iban"
          name="iban"
          value={bankDetails.iban}
          onChange={handleInputChange}
          label="IBAN"
        />
        
        <FloatingLabelInput
          id="bicCode"
          name="bicCode"
          value={bankDetails.bicCode}
          onChange={handleInputChange}
          label="BIC Code"
        />
        
        <FloatingLabelInput
          id="address"
          name="address"
          value={bankDetails.address}
          onChange={handleInputChange}
          label="Address"
        />
        
        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BankForm;