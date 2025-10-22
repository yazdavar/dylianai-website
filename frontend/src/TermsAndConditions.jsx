import React, { useState } from 'react';
import logo from './assets/dylianai-logo.png';

export default function TermsAndConditions() {
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
            <a href="/privacy" className="text-gray-700 hover:text-indigo-700">Privacy</a>
            <a href="/terms" className="text-indigo-700 font-semibold">Terms</a>
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
            <a href="/privacy" className="block text-gray-700 hover:text-indigo-700 font-medium">Privacy</a>
            <a href="/terms" className="block text-indigo-700 font-semibold">Terms</a>
          </div>
        )}
      </header>

      <main className="bg-white text-gray-900 font-sans w-full pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 text-center bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl">Effective Date: January 1, 2025</p>
        </section>

        {/* Terms Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">

              {/* Introduction */}
              <div>
                <p className="text-lg text-gray-700">
                  Welcome to DylianAI. By accessing or using our website, services, or products
                  (collectively, the "Services"), you agree to be bound by these Terms and Conditions
                  ("Terms"). Please read them carefully. If you do not agree with these Terms, you may
                  not use our Services.
                </p>
              </div>

              {/* Business Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Information</h2>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Business Name:</strong> DylianAI</p>
                  <p><strong>Purpose:</strong> AI-powered marketing analytics and business intelligence solutions</p>
                  <p><strong>Contact:</strong> info@dylianai.com</p>
                  <p><strong>Website:</strong> https://dylianai.com</p>
                  <p><strong>Location:</strong> Scottsdale, AZ</p>
                </div>
              </div>

              {/* Services Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
                <p className="mb-4 text-gray-700">
                  DylianAI provides artificial intelligence-driven analytics and marketing solutions, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>AI-powered marketing analytics</li>
                  <li>Customer segmentation and targeting</li>
                  <li>Predictive campaign optimization</li>
                  <li>Real-time business intelligence dashboards</li>
                  <li>Custom AI solutions for marketing teams</li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
                <p className="mb-4 text-gray-700">By using our Services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Use the Services only for lawful purposes and in accordance with these Terms</li>
                  <li>Not use the Services in any way that could damage, disable, or impair our systems</li>
                  <li>Not attempt to gain unauthorized access to any part of our Services</li>
                  <li>Maintain the confidentiality of any account credentials provided to you</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
                <p className="mb-4 text-gray-700">
                  All content, features, and functionality of our Services, including but not limited to text,
                  graphics, logos, software, and data compilations, are the exclusive property of DylianAI and
                  are protected by United States and international copyright, trademark, and other intellectual
                  property laws.
                </p>
                <p className="text-gray-700">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or
                  exploit any of our content without our prior written consent.
                </p>
              </div>

              {/* Data and Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data and Privacy</h2>
                <p className="mb-4 text-gray-700">
                  We are committed to protecting your privacy and handling your data responsibly. When you use
                  our Services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We collect and process data as described in our Privacy Policy</li>
                  <li>We never sell or share your personal information with third parties for marketing purposes</li>
                  <li>Data is stored securely using industry-standard encryption and security practices</li>
                  <li>You retain ownership of any data you provide to us</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  For complete details on how we handle your data, please review our{' '}
                  <a href="/privacy" className="text-indigo-700 hover:underline">Privacy Policy</a>.
                </p>
              </div>

              {/* SMS Communications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">SMS Communications</h2>
                <p className="text-gray-700">
                  If you opt in to receive SMS notifications, you consent to receive text messages from DylianAI
                  related to appointments, confirmations, and service updates. Message frequency may vary. Message
                  and data rates may apply. You can reply <strong>STOP</strong> at any time to opt out or{' '}
                  <strong>HELP</strong> for assistance.
                </p>
              </div>

              {/* Service Availability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability and Modifications</h2>
                <p className="mb-4 text-gray-700">
                  We strive to maintain continuous availability of our Services, but we do not guarantee
                  uninterrupted or error-free operation. We reserve the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Modify, suspend, or discontinue any part of our Services at any time</li>
                  <li>Update these Terms from time to time</li>
                  <li>Refuse service to anyone for any reason at any time</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="mb-4 text-gray-700">
                  To the fullest extent permitted by law, DylianAI shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
                  whether incurred directly or indirectly, or any loss of data, use, goodwill, or other
                  intangible losses resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Your use or inability to use our Services</li>
                  <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                  <li>Any interruption or cessation of transmission to or from our Services</li>
                  <li>Any bugs, viruses, or similar harmful components transmitted through our Services by any third party</li>
                </ul>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-700">
                  You agree to indemnify, defend, and hold harmless DylianAI and its officers, directors,
                  employees, and agents from and against any claims, liabilities, damages, losses, and expenses,
                  including reasonable attorneys' fees, arising out of or in any way connected with your access
                  to or use of our Services or your violation of these Terms.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Dispute Resolution</h2>
                <p className="mb-4 text-gray-700">
                  These Terms shall be governed by and construed in accordance with the laws of the State of
                  Arizona, United States, without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-700">
                  Any disputes arising from these Terms or your use of our Services shall be resolved through
                  binding arbitration in Scottsdale, Arizona, except that either party may seek injunctive relief
                  in any court of competent jurisdiction.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to update or modify these Terms at any time. We will notify users of
                  material changes by posting the updated Terms on our website with a new effective date. Your
                  continued use of our Services after any such changes constitutes your acceptance of the new Terms.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="mb-4 text-gray-700">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> info@dylianai.com</p>
                  <p><strong>Website:</strong> https://dylianai.com</p>
                  <p><strong>Location:</strong> Scottsdale, AZ</p>
                </div>
              </div>

              {/* Agreement */}
              <div className="border-t pt-6 mt-8">
                <p className="text-center text-gray-600 italic">
                  By using DylianAI's Services, you acknowledge that you have read, understood, and agree to be
                  bound by these Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-sm text-gray-500 border-t mt-12">
          <p className="mb-2">DylianAI • info@dylianai.com • https://dylianai.com • Scottsdale, AZ</p>
          <p>© 2025 DylianAI. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
