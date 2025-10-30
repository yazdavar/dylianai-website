import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/privacy-policy" className="text-indigo-700 font-semibold">Privacy</Link>
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
            <Link to="/privacy-policy" className="block text-indigo-700 font-semibold">Privacy</Link>
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
              <div className="mb-8">
                <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy describes how DylianAI ("we," "our," or "us") collects, uses, and shares your personal information when you visit our website or use our services.
                </p>
              </div>

              <div className="space-y-8">
                {/* Table of Contents */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Table of Contents</h3>
                  <ul className="space-y-2">
                    <li><a href="#information-collection" className="text-indigo-600 hover:text-indigo-800 underline">1. Information We Collect</a></li>
                    <li><a href="#information-use" className="text-indigo-600 hover:text-indigo-800 underline">2. How We Use Your Information</a></li>
                    <li><a href="#information-sharing" className="text-indigo-600 hover:text-indigo-800 underline">3. Information Sharing</a></li>
                    <li><a href="#data-security" className="text-indigo-600 hover:text-indigo-800 underline">4. Data Security</a></li>
                    <li><a href="#cookies" className="text-indigo-600 hover:text-indigo-800 underline">5. Cookies and Tracking</a></li>
                    <li><a href="#your-rights" className="text-indigo-600 hover:text-indigo-800 underline">6. Your Rights</a></li>
                    <li><a href="#sms-policy" className="text-indigo-600 hover:text-indigo-800 underline">7. SMS Communications Policy</a></li>
                    <li><a href="#policy-changes" className="text-indigo-600 hover:text-indigo-800 underline">8. Changes to This Policy</a></li>
                    <li><a href="#contact" className="text-indigo-600 hover:text-indigo-800 underline">9. Contact Us</a></li>
                  </ul>
                </div>

                {/* Section 1: Information Collection */}
                <div id="information-collection">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-700">
                    <a href="#information-collection" className="hover:text-indigo-800">1. Information We Collect</a>
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">Personal Information</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We may collect personal information that you provide directly to us, including:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>Name and contact information (email address, phone number)</li>
                        <li>Business information and professional details</li>
                        <li>Communication preferences</li>
                        <li>Any other information you choose to provide</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">Automatically Collected Information</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We automatically collect certain information when you visit our website, including:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>IP address and device information</li>
                        <li>Browser type and version</li>
                        <li>Pages visited and time spent on our site</li>
                        <li>Referring website information</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 2: Information Use */}
                <div id="information-use">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-700">
                    <a href="#information-use" className="hover:text-indigo-800">2. How We Use Your Information</a>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Provide and improve our AI analytics and marketing services</li>
                    <li>Communicate with you about our services and respond to inquiries</li>
                    <li>Send appointment reminders and service-related notifications</li>
                    <li>Analyze website usage and optimize user experience</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </div>

                {/* Section 3: Information Sharing */}
                <div id="information-sharing">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-700">
                    <a href="#information-sharing" className="hover:text-indigo-800">3. Information Sharing</a>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                  </ul>
                </div>

                {/* Section 4: Data Security */}
                <div id="data-security">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-700">
                    <a href="#data-security" className="hover:text-indigo-800">4. Data Security</a>
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </div>

                {/* Section 5: Cookies */}
                <div id="cookies">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-700">
                    <a href="#cookies" className="hover:text-indigo-800">5. Cookies and Tracking</a>
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                {/* Section 6: Your Rights */}
                <div id="your-rights">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-700">
                    <a href="#your-rights" className="hover:text-indigo-800">6. Your Rights</a>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request a copy of your data</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                {/* Section 7: SMS Policy */}
                <div id="sms-policy">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-700">
                    <a href="#sms-policy" className="hover:text-indigo-800">7. SMS Communications Policy</a>
                  </h2>
                  
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">DylianAI SMS Consent Policy (Opt-In Statement)</h3>
                    <p><strong className="text-gray-800">Business Name:</strong> DylianAI</p>
                    <p><strong className="text-gray-800">Purpose:</strong> Appointment reminders, confirmations, and follow-up notifications</p>
                  </div>

                  <div className="space-y-6">
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

                {/* Section 8: Policy Changes */}
                <div id="policy-changes">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-700">
                    <a href="#policy-changes" className="hover:text-indigo-800">8. Changes to This Policy</a>
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after any modifications constitutes acceptance of the updated policy.
                  </p>
                </div>

                {/* Section 9: Contact */}
                <div id="contact">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-700">
                    <a href="#contact" className="hover:text-indigo-800">9. Contact Us</a>
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-800"><strong>Email:</strong> info@dylianai.com</p>
                    <p className="text-gray-800"><strong>Website:</strong> https://dylianai.com</p>
                  </div>
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


