import React from 'react';
import FormBuilder from './FormBuilder';
import { ValidationRule } from '../../utils/validation';

const FormPreview: React.FC = () => {
  const emailValidation: ValidationRule[] = [
    {
      type: 'email',
      message: 'Please enter a valid email address'
    }
  ];

  const nameValidation: ValidationRule[] = [
    {
      type: 'minLength',
      value: 2,
      message: 'Name must be at least 2 characters long'
    }
  ];

  const sampleFields = [
    {
      type: 'text' as const,
      label: 'Full Name',
      name: 'fullName',
      required: true,
      validation: nameValidation,
      placeholder: 'John Doe'
    },
    {
      type: 'email' as const,
      label: 'Email Address',
      name: 'email',
      required: true,
      validation: emailValidation,
      placeholder: 'john@example.com'
    },
    {
      type: 'select' as const,
      label: 'Country',
      name: 'country',
      required: true,
      options: [
        { value: '', label: 'Select your country' },
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' }
      ]
    }
  ];

  const handleSubmit = (data: Record<string, any>) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully! Check console for details.');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <FormBuilder fields={sampleFields} onSubmit={handleSubmit} />
    </div>
  );
};

export default FormPreview;