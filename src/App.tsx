import React from 'react';
import { Scan } from 'lucide-react';
import { Features } from './components/Features';
import { NewsletterForm } from './components/NewsletterForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Scan className="w-26 h-26" style={{ color: '#009688' }}  />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fini le gaspillage alimentaire
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scannez, suivez et soyez alerté avant que vos aliments ne périment. 
            La solution intelligente pour gérer vos dates de péremption.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <Features />
          <NewsletterForm />
        </div>

        <footer className="text-center text-gray-600">
        </footer>
      </div>
    </div>
  );
}

export default App;