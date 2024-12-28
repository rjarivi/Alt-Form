import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface FileInputProps {
  label: string;
  name: string;
  accept?: string;
  maxSize?: number; // in bytes
  required?: boolean;
  onChange: (file: File | null) => void;
  error?: string;
}

const FileInput: React.FC<FileInputProps> = ({
  label,
  name,
  accept,
  maxSize,
  required = false,
  onChange,
  error
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && maxSize && file.size > maxSize) {
      onChange(null);
      return;
    }
    onChange(file);
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div
        onClick={() => inputRef.current?.click()}
        className={`w-full px-4 py-4 border-2 border-dashed rounded-lg cursor-pointer
          hover:bg-gray-50 transition-colors flex items-center justify-center
          ${error ? 'border-red-500' : 'border-gray-300'}`}
      >
        <Upload className="w-6 h-6 text-gray-400 mr-2" />
        <span className="text-gray-600">Click to upload or drag and drop</span>
      </div>
      <input
        ref={inputRef}
        type="file"
        id={name}
        name={name}
        accept={accept}
        onChange={handleFileChange}
        required={required}
        className="hidden"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FileInput;