import React from 'react';
import FormPreview from '../form/FormPreview';

const DemoSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Try Our Form Builder</h3>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <FormPreview />
        </div>
      </div>
    </section>
  );
};

export default DemoSection;