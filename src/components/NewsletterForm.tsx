import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import emailjs from 'emailjs-com';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      email,
    };

    try {
      await emailjs.send('service_kw64i2n', 'template_86f11hz', templateParams, 'Bv12fowRBpgW27x3V');
      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Échec de l\'inscription', error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Ne laissez plus vos aliments se périmer !
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Adresse email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tapez votre adresse email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white font-semibold py-2 px-4 rounded-lg transition duration-150 ease-in-out flex items-center justify-center"
          style={{ backgroundColor: '#009688' }}
        >
          {isSubmitted ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Merci de votre intérêt !
            </>
          ) : (
            "Être informé du lancement"
          )}
        </button>
      </form>
    </div>
  );
}