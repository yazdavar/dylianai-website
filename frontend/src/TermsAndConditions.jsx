import { Link } from 'react-router-dom';
import logo from './assets/dylianai-logo.png';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="DylianAI Logo" className="h-8 w-auto" />
            <span className="text-2xl font-bold text-indigo-700">DylianAI</span>
          </Link>
          <Link to="/" className="text-indigo-700 hover:text-indigo-900 font-medium">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <img src={logo} alt="DylianAI Logo" className="h-16 w-auto mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
          <p className="text-gray-600">Effective Date: January 1, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-800 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-lg">
              Welcome to DylianAI. By accessing or using our website, services, or products
              (collectively, the "Services"), you agree to be bound by these Terms and Conditions
              ("Terms"). Please read them carefully.
            </p>
          </section>

          {/* Business Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Information</h2>
            <p className="mb-2"><strong>Business Name:</strong> DylianAI</p>
            <p className="mb-2"><strong>Purpose:</strong> AI-powered marketing analytics and business intelligence solutions</p>
            <p className="mb-2"><strong>Contact:</strong> info@dylianai.com</p>
            <p className="mb-2"><strong>Website:</strong> https://dylianai.com</p>
            <p><strong>Location:</strong> Scottsdale, AZ</p>
          </section>

          {/* Services Description */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
            <p className="mb-4">
              DylianAI provides artificial intelligence-driven analytics and marketing solutions, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI-powered marketing analytics</li>
              <li>Customer segmentation and targeting</li>
              <li>Predictive campaign optimization</li>
              <li>Real-time business intelligence dashboards</li>
              <li>Custom AI solutions for marketing teams</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
            <p className="mb-4">By using our Services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information when requested</li>
              <li>Use the Services only for lawful purposes and in accordance with these Terms</li>
              <li>Not use the Services in any way that could damage, disable, or impair our systems</li>
              <li>Not attempt to gain unauthorized access to any part of our Services</li>
              <li>Maintain the confidentiality of any account credentials provided to you</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
            <p className="mb-4">
              All content, features, and functionality of our Services, including but not limited to text,
              graphics, logos, software, and data compilations, are the exclusive property of DylianAI and
              are protected by United States and international copyright, trademark, and other intellectual
              property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or
              exploit any of our content without our prior written consent.
            </p>
          </section>

          {/* Data and Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data and Privacy</h2>
            <p className="mb-4">
              We are committed to protecting your privacy and handling your data responsibly. When you use
              our Services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We collect and process data as described in our Privacy Policy</li>
              <li>We never sell or share your personal information with third parties for marketing purposes</li>
              <li>Data is stored securely using industry-standard encryption and security practices</li>
              <li>You retain ownership of any data you provide to us</li>
            </ul>
            <p className="mt-4">
              For complete details on how we handle your data, please review our Privacy Policy at
              <a href="https://dylianai.com/privacy" className="text-indigo-700 hover:underline ml-1">
                https://dylianai.com/privacy
              </a>.
            </p>
          </section>

          {/* SMS Communications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SMS Communications</h2>
            <p className="mb-4">
              If you opt in to receive SMS notifications, you consent to receive text messages from DylianAI
              related to appointments, confirmations, and service updates. Message frequency may vary. Message
              and data rates may apply. You can reply STOP at any time to opt out or HELP for assistance.
            </p>
          </section>

          {/* Service Availability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability and Modifications</h2>
            <p className="mb-4">
              We strive to maintain continuous availability of our Services, but we do not guarantee
              uninterrupted or error-free operation. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify, suspend, or discontinue any part of our Services at any time</li>
              <li>Update these Terms from time to time</li>
              <li>Refuse service to anyone for any reason at any time</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, DylianAI shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
              whether incurred directly or indirectly, or any loss of data, use, goodwill, or other
              intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use or inability to use our Services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our Services</li>
              <li>Any bugs, viruses, or similar harmful components transmitted through our Services by any third party</li>
            </ul>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless DylianAI and its officers, directors,
              employees, and agents from and against any claims, liabilities, damages, losses, and expenses,
              including reasonable attorneys' fees, arising out of or in any way connected with your access
              to or use of our Services or your violation of these Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Dispute Resolution</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of
              Arizona, United States, without regard to its conflict of law provisions.
            </p>
            <p>
              Any disputes arising from these Terms or your use of our Services shall be resolved through
              binding arbitration in Scottsdale, Arizona, except that either party may seek injunctive relief
              in any court of competent jurisdiction.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
            <p>
              We reserve the right to update or modify these Terms at any time. We will notify users of
              material changes by posting the updated Terms on our website with a new effective date. Your
              continued use of our Services after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <p className="mb-2"><strong>Email:</strong> info@dylianai.com</p>
            <p className="mb-2"><strong>Website:</strong> https://dylianai.com</p>
            <p><strong>Location:</strong> Scottsdale, AZ</p>
          </section>

          {/* Agreement */}
          <section className="border-t pt-6 mt-8">
            <p className="text-center text-gray-600 italic">
              By using DylianAI's Services, you acknowledge that you have read, understood, and agree to be
              bound by these Terms and Conditions.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500 border-t mt-12">
        <p className="mb-2">DylianAI • info@dylianai.com • https://dylianai.com • Scottsdale, AZ</p>
        <p>© 2025 DylianAI. All rights reserved.</p>
      </footer>
    </div>
  );
}
