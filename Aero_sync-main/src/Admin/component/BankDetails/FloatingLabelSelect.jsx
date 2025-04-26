import React, { useState } from 'react';
const FloatingLabelSelect = ({
    id,
    name,
    value,
    onChange,
    label,
    required = false,
    options = []
  }) => {
    const [isFocused, setIsFocused] = useState(false);
  
    return (
      <div className="relative mt-6">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => !value && setIsFocused(false)}
          className={`w-full px-3 py-2 border ${isFocused || value ? 'border-green-500' : 'border-gray-300'} rounded-md peer focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-transparent`}
          required={required}
        >
          <option value="" disabled></option>
          {options.map((opt, index) => (
            <option key={index} value={opt}>{opt}</option>
          ))}
        </select>
        <label
          htmlFor={id}
          className={`absolute left-3 transition-all duration-200 pointer-events-none bg-white px-1 ${
            isFocused || value
              ? '-top-2.5 text-xs text-green-600'
              : 'top-2 text-gray-500'
          }`}
        >
          {label}{required && <span className="text-red-500">*</span>}
        </label>
      </div>
    );
  };
  export default FloatingLabelSelect;

  