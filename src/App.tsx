import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureList from './components/features/FeatureList';
import DemoSection from './components/demo/DemoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <FeatureList />
      <DemoSection />
      <Footer />
    </div>
  );
}

export default App;