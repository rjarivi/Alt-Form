import React from 'react';

interface TextareaInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  rows?: number;
  placeholder?: string;
  maxLength?: number;
}

const TextareaInput: React.FC<TextareaInputProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
  error,
  rows = 4,
  placeholder,
  maxLength
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 
          ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {maxLength && (
        <div className="mt-1 text-sm text-gray-500">
          {value.length}/{maxLength} characters
        </div>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextareaInput;