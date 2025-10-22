import React, { useState } from 'react';
import logo from './assets/dylianai-logo.png';

export default function PrivacyPolicy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="DylianAI Logo" className="h-8 w-auto" />
            <span className="text-2xl font-bold text-indigo-700">DylianAI</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-indigo-700">Home</a>
            <a href="/#services" className="text-gray-700 hover:text-indigo-700">Services</a>
            <a href="/#why" className="text-gray-700 hover:text-indigo-700">Why Us</a>
            <a href="/#contact" className="text-gray-700 hover:text-indigo-700">Contact</a>
            <a href="/privacy" className="text-indigo-700 font-semibold">Privacy</a>
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
            <a href="/" className="block text-gray-700 hover:text-indigo-700 font-medium">Home</a>
            <a href="/#services" className="block text-gray-700 hover:text-indigo-700 font-medium">Services</a>
            <a href="/#why" className="block text-gray-700 hover:text-indigo-700 font-medium">Why Us</a>
            <a href="/#contact" className="block text-gray-700 hover:text-indigo-700 font-medium">Contact</a>
            <a href="/privacy" className="block text-indigo-700 font-semibold">Privacy</a>
          </div>
        )}
      </header>

      <main className="bg-white text-gray-900 font-sans w-full pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 text-center bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">DylianAI SMS Consent Policy</p>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-indigo-700">DylianAI SMS Consent Policy (Opt-In Statement)</h2>
              
              <div className="space-y-6">
                <div>
                  <p><strong className="text-gray-800">Business Name:</strong> DylianAI</p>
                  <p><strong className="text-gray-800">Purpose:</strong> Appointment reminders, confirmations, and follow-up notifications</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">SMS Consent Notice</h3>
                  <p className="text-gray-700 leading-relaxed">
                    By entering your phone number or booking an appointment through DylianAI (or one of our
                    partner offices), you agree to receive text messages related to your appointments and customer
                    service updates. These messages may include appointment confirmations and reminders,
                    rescheduling or cancellation notices, and follow-up instructions and customer-care responses.
                    Message frequency may vary. Message and data rates may apply. You can reply <strong>STOP</strong> at any
                    time to opt out or <strong>HELP</strong> for assistance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">How We Collect Consent</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Customers provide consent by entering their phone number into an online booking or intake form,
                    or providing verbal or written consent when contacting the business directly. All messages are
                    sent only to customers with a prior relationship or explicit opt-in.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Privacy Commitment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We never sell or share your phone number. Data is stored securely and used only for
                    communication relevant to your requested services. For more details, visit
                    {' '}<a href="https://dylianai.com/privacy" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">https://dylianai.com/privacy</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-500">
          © 2025 DylianAI. All rights reserved.
        </footer>
      </main>
    </>
  );
}


