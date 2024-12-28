import React, { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import FileInput from './inputs/FileInput';
import DateInput from './inputs/DateInput';
import TimeInput from './inputs/TimeInput';
import TextareaInput from './inputs/TextareaInput';
import { validateForm, ValidationRule } from '../../utils/validation';

interface FormField {
  type: 'text' | 'email' | 'select' | 'file' | 'date' | 'time' | 'textarea';
  label: string;
  name: string;
  required?: boolean;
  options?: { value: string; label: string; }[];
  validation?: ValidationRule[];
  props?: Record<string, any>;
}

interface FormBuilderProps {
  fields: FormField[];
  onSubmit: (data: Record<string, any>) => void;
}

const FormBuilder: React.FC<FormBuilderProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create validation rules map
    const validationRules = fields.reduce((acc, field) => {
      if (field.validation || field.required) {
        acc[field.name] = [
          ...(field.required ? [{ type: 'required', message: 'This field is required' }] : []),
          ...(field.validation || [])
        ];
      }
      return acc;
    }, {} as Record<string, ValidationRule[]>);

    // Validate form
    const newErrors = validateForm(formData, validationRules);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  const handleChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const renderField = (field: FormField) => {
    const commonProps = {
      key: field.name,
      label: field.label,
      name: field.name,
      value: formData[field.name] || '',
      onChange: (value: any) => handleChange(field.name, value),
      required: field.required,
      error: errors[field.name],
      ...field.props
    };

    switch (field.type) {
      case 'text':
      case 'email':
        return <TextInput {...commonProps} type={field.type} />;
      case 'select':
        return <SelectInput {...commonProps} options={field.options || []} />;
      case 'file':
        return <FileInput {...commonProps} />;
      case 'date':
        return <DateInput {...commonProps} />;
      case 'time':
        return <TimeInput {...commonProps} />;
      case 'textarea':
        return <TextareaInput {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      {fields.map(renderField)}
      
      <button
        type="submit"
        className="w-full mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
          transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
};

export default FormBuilder;