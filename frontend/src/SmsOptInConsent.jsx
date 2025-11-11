import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/dylianai-logo.png';

export default function SmsOptInConsent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhoneNumber = (phone) => {
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    // Check if it's a valid US phone number (10 digits) or international format
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };

  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    
    // Format as (XXX) XXX-XXXX for US numbers
    if (digitsOnly.length <= 3) {
      return digitsOnly;
    } else if (digitsOnly.length <= 6) {
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
    } else if (digitsOnly.length <= 10) {
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
    } else {
      // For longer numbers (international), just add formatting
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)} ${digitsOnly.slice(10)}`;
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'phoneNumber') {
      const formatted = formatPhoneNumber(value);
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate phone number
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    // Validate consent
    if (!formData.consent) {
      newErrors.consent = 'You must consent to receive SMS messages';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // TODO: Replace with actual API call
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Here you would typically make an API call:
      // try {
      //   const response = await fetch('/api/sms-opt-in', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({
      //       name: formData.name,
      //       phoneNumber: formData.phoneNumber.replace(/\D/g, ''),
      //       consent: formData.consent,
      //       timestamp: new Date().toISOString(),
      //     }),
      //   });
      //   if (response.ok) {
      //     setIsSubmitted(true);
      //   } else {
      //     setErrors({ submit: 'Failed to submit. Please try again.' });
      //   }
      // } catch (error) {
      //   setErrors({ submit: 'An error occurred. Please try again.' });
      // }
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <>
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="DylianAI Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold text-indigo-700">DylianAI</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-indigo-700">Home</Link>
              <a href="/#services" className="text-gray-700 hover:text-indigo-700">Services</a>
              <a href="/#why" className="text-gray-700 hover:text-indigo-700">Why Us</a>
              <a href="/#contact" className="text-gray-700 hover:text-indigo-700">Contact</a>
              <Link to="/privacy-policy" className="text-gray-700 hover:text-indigo-700">Privacy</Link>
              <Link to="/terms" className="text-gray-700 hover:text-indigo-700">Terms</Link>
            </nav>
            <button
              className="md:hidden text-gray-700 hover:text-indigo-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 rounded-b-lg text-center">
              <Link to="/" className="block text-gray-700 hover:text-indigo-700 font-medium">Home</Link>
              <a href="/#services" className="block text-gray-700 hover:text-indigo-700 font-medium">Services</a>
              <a href="/#why" className="block text-gray-700 hover:text-indigo-700 font-medium">Why Us</a>
              <a href="/#contact" className="block text-gray-700 hover:text-indigo-700 font-medium">Contact</a>
              <Link to="/privacy-policy" className="block text-gray-700 hover:text-indigo-700 font-medium">Privacy</Link>
              <Link to="/terms" className="block text-gray-700 hover:text-indigo-700 font-medium">Terms</Link>
            </div>
          )}
        </header>

        <main className="bg-white text-gray-900 font-sans w-full pt-20 min-h-screen">
          <section className="py-20 px-6">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <div className="mb-6">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h1>
                  <p className="text-lg text-gray-600 mb-4">
                    You have successfully opted in to receive SMS messages.
                  </p>
                  <p className="text-gray-700 mb-6">
                    You will now receive appointment reminders and scheduling-related messages at{' '}
                    <strong>{formData.phoneNumber}</strong>.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Remember:</strong> You can opt-out at any time by replying <strong>STOP</strong> to any message.
                    </p>
                    <p className="text-sm text-gray-700">
                      Standard message and data rates may apply. Message frequency varies based on your scheduled appointments.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Link
                      to="/"
                      className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Return to Home
                    </Link>
                    <div>
                      {/* <Link
                        to="/sms-opt-in-policy"
                        className="text-indigo-600 hover:text-indigo-800 underline text-sm"
                      >
                        View SMS Opt-In Policy
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="text-center py-6 text-sm text-gray-500">
            © 2025 DylianAI. All rights reserved.
          </footer>
        </main>
      </>
    );
  }

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="DylianAI Logo" className="h-8 w-auto" />
            <span className="text-2xl font-bold text-indigo-700">DylianAI</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-700">Home</Link>
            <a href="/#services" className="text-gray-700 hover:text-indigo-700">Services</a>
            <a href="/#why" className="text-gray-700 hover:text-indigo-700">Why Us</a>
            <a href="/#contact" className="text-gray-700 hover:text-indigo-700">Contact</a>
            <Link to="/privacy-policy" className="text-gray-700 hover:text-indigo-700">Privacy</Link>
          </nav>
          <button
            className="md:hidden text-gray-700 hover:text-indigo-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 rounded-b-lg text-center">
            <Link to="/" className="block text-gray-700 hover:text-indigo-700 font-medium">Home</Link>
            <a href="/#services" className="block text-gray-700 hover:text-indigo-700 font-medium">Services</a>
            <a href="/#why" className="block text-gray-700 hover:text-indigo-700 font-medium">Why Us</a>
            <a href="/#contact" className="block text-gray-700 hover:text-indigo-700 font-medium">Contact</a>
            <Link to="/privacy-policy" className="block text-gray-700 hover:text-indigo-700 font-medium">Privacy</Link>
          </div>
        )}
      </header>

      <main className="bg-white text-gray-900 font-sans w-full pt-20">
        <section className="py-20 px-6 text-center bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
          <h1 className="text-4xl font-bold mb-4">SMS Opt-In Consent</h1>
          <p className="text-xl">Sign up to receive appointment reminders via SMS</p>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition ${
                      errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                    required
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Enter your mobile phone number to receive SMS messages
                  </p>
                </div>

                <div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className={`mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded ${
                        errors.consent ? 'border-red-500' : ''
                      }`}
                      required
                    />
                    <label htmlFor="consent" className="ml-3 text-sm text-gray-700">
                      <span className="text-red-500">*</span> I agree to receive recurring automated text messages at the phone number provided. Msg & data rates may apply. Msg frequency varies. Reply HELP for help and STOP to end. View our{' '}
                      <Link to="/terms" className="text-indigo-600 hover:text-indigo-800 underline">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link to="/privacy-policy" className="text-indigo-600 hover:text-indigo-800 underline">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="mt-1 text-sm text-red-600 ml-7">{errors.consent}</p>
                  )}
                </div>

                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-red-600">{errors.submit}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Consent'}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Your privacy is important to us. For more information, please review our{' '}
                  <Link to="/privacy-policy" className="text-indigo-600 hover:text-indigo-800 underline">
                    Privacy Policy
                  </Link>
                  {' '}and{' '}
                  {/* <Link to="/sms-opt-in-policy" className="text-indigo-600 hover:text-indigo-800 underline">
                    SMS Opt-In Policy
                  </Link> */}
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center py-6 text-sm text-gray-500">
          © 2025 DylianAI. All rights reserved.
        </footer>
      </main>
    </>
  );
}

