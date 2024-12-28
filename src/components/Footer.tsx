import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <span className="text-xl font-bold text-indigo-600">ModernForms</span>
            <p className="mt-2 text-sm text-gray-500">
              The future of form building, powered by Web3 technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#features" className="text-gray-500 hover:text-gray-900">Features</a></li>
              <li><a href="#templates" className="text-gray-500 hover:text-gray-900">Templates</a></li>
              <li><a href="#pricing" className="text-gray-500 hover:text-gray-900">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Documentation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">API Reference</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} ModernForms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;