import React from 'react';
import Feature from '../Feature';
import { FormWizard, FileText, Shield, Wallet } from 'lucide-react';

const features = [
  {
    icon: <FormWizard className="w-6 h-6" />,
    title: "Smart Form Builder",
    description: "Create beautiful forms with drag-and-drop ease. Customize everything from layout to validation."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Advanced Security",
    description: "Enterprise-grade security with form encryption, password protection, and custom access controls."
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Web3 Integration",
    description: "Accept crypto payments, verify wallet ownership, and create token-gated forms."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Rich Form Elements",
    description: "From simple text inputs to file uploads and rich text editors - we've got it all."
  }
];

const FeatureList: React.FC = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
        <p className="mt-4 text-xl text-gray-600">Everything you need to create amazing forms</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureList;