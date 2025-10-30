import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/dylianai-logo.png';

export default function SmsOptInPolicy() {
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
            <a href="/" className="block text-gray-700 hover:text-indigo-700 font-medium">Home</a>
            <a href="/#services" className="block text-gray-700 hover:text-indigo-700 font-medium">Services</a>
            <a href="/#why" className="block text-gray-700 hover:text-indigo-700 font-medium">Why Us</a>
            <a href="/#contact" className="block text-gray-700 hover:text-indigo-700 font-medium">Contact</a>
            <Link to="/privacy-policy" className="block text-gray-700 hover:text-indigo-700 font-medium">Privacy</Link>
          </div>
        )}
      </header>

      <main className="bg-white text-gray-900 font-sans w-full pt-20">
        <section className="py-20 px-6 text-center bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
          <h1 className="text-4xl font-bold mb-4">SMS Opt-In Policy</h1>
          <p className="text-xl">How we collect and use SMS consent</p>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
              <div className="text-center mb-8">
                <p className="text-gray-600 mb-2">
                  <strong>Effective Date:</strong> January 1, 2025
                </p>
                <p className="text-gray-600">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-700">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  DylianAI is a communication platform that enables businesses (such as medical practices, dental offices, and other service providers) to send appointment reminders and scheduling-related messages to their customers, patients, and clients through SMS text messages and phone calls. Businesses subscribe to and use DylianAI's platform solely for appointment-related communications.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you receive SMS messages through DylianAI, they are sent on behalf of the business you have a relationship with (for example, your dentist or healthcare provider), using DylianAI's communication platform. DylianAI acts as the technology provider that powers these communications.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Important:</strong> DylianAI's platform is used exclusively for appointment scheduling, reminders, and confirmations. <strong>No protected health information, medical information, diagnostic information, or treatment details will be communicated through our platform.</strong> Only appointment-related messages (such as appointment reminders, confirmations, cancellations, and rescheduling notices) are sent through DylianAI.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At DylianAI, we are committed to protecting your privacy and ensuring compliance with all applicable laws and regulations regarding SMS communications. This SMS Opt-In Policy explains how consent for SMS messaging is collected and managed when businesses use our platform to communicate with you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-700">2. Consent to Receive SMS Messages</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you provide your mobile number and opt-in to receive SMS messages, you are consenting to receive appointment-related messages from the business you have a relationship with (such as your dentist, doctor, or service provider). These messages are delivered through DylianAI's communication platform on behalf of that business and will only include appointment scheduling, reminders, confirmations, and related scheduling information.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>This consent is not a condition of purchasing any goods or services from the business.</strong> You may receive services from the business without providing consent to receive SMS messages.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may opt-in to receive SMS messages from a business using DylianAI's platform through one of the following methods:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                  <li>Checking a box on a form or online portal at the business's location explicitly indicating your consent to receive SMS messages</li>
                  <li>Replying "YES" or "JOIN" to a text message invitation sent by the business</li>
                  <li>Sending a specific keyword to a designated short code or phone number provided by the business</li>
                  <li>Providing explicit verbal or written consent to the business's representative (e.g., during check-in at a medical appointment)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Consent is voluntary and may be withdrawn at any time as described in Section 3 below. Your consent applies to SMS communications from the specific business you opted in with, delivered via DylianAI's platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-700">3. Opt-Out</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can opt-out of receiving SMS messages from a business using DylianAI's platform at any time by replying "STOP" to any message you receive from that business.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-800 font-semibold">
                    To opt-out, reply: STOP
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Upon receipt of your opt-out request, you will receive a confirmation message via DylianAI's platform, and that business will cease sending SMS messages to your number through DylianAI. You may opt back in at any time using the methods described in Section 2. Note that opting out from one business does not affect your SMS preferences with other businesses that may use DylianAI's platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-700">4. Message Content and Frequency</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  DylianAI's platform is used exclusively for appointment scheduling communications. Messages sent through DylianAI's platform are limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                  <li>Appointment reminders</li>
                  <li>Appointment confirmations</li>
                  <li>Appointment cancellation notices</li>
                  <li>Appointment rescheduling notices</li>
                  <li>Scheduling-related information (e.g., appointment time, date, location)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Important limitations:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                  <li><strong>No protected health information</strong> will be sent through DylianAI's platform</li>
                  <li><strong>No medical, diagnostic, or treatment information</strong> will be communicated</li>
                  <li><strong>No test results or health status updates</strong> will be sent</li>
                  <li>Only appointment scheduling, reminder, and confirmation messages are permitted</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Message frequency varies based on your scheduled appointments with the business. You will typically receive messages related to upcoming appointments, such as reminders a few days before and confirmations when appointments are scheduled or modified.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-700">5. Message and Data Rates</h2>
                <p className="text-gray-700 leading-relaxed">
                  Standard message and data rates may apply to SMS messages sent by businesses through DylianAI's platform. Please consult your mobile service provider for details about your messaging plan and any applicable charges.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-700">6. Privacy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your privacy is important to us. As a communication platform provider, DylianAI facilitates messaging between you and the businesses you have relationships with. Your contact information and message content are shared with the business you are communicating with, as necessary to facilitate your requested communications.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  DylianAI does not sell, rent, or share customer phone numbers or message content with unauthorized third parties. We act as a secure technology platform that enables businesses to communicate with their customers, and we process your information solely for the purpose of providing these communication services on behalf of the businesses that use our platform.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The businesses that use DylianAI's platform are responsible for their own privacy practices and compliance with applicable privacy laws regarding the customer information they collect and how they use it.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For more information on how DylianAI collects, uses, and protects your information, please see our{' '}
                  <Link to="/privacy-policy" className="text-indigo-600 hover:text-indigo-800 underline">Privacy Policy</Link>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-700">7. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this SMS Opt-In Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of SMS messaging services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-indigo-700">8. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions or concerns about this SMS Opt-In Policy or our messaging practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-800 mb-2">
                    <strong>DylianAI Compliance Department</strong>
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong> <a href="mailto:info@dylianai.com" className="text-indigo-600 hover:text-indigo-800 underline">info@dylianai.com</a>
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">⚖️ Compliance Notes</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  This policy follows the requirements of:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>The CTIA Messaging Principles and Best Practices</li>
                  <li>The U.S. A2P 10DLC regulations</li>
                  <li>Applicable federal and state telecommunications laws</li>
                </ul>
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


