import { useState } from "react";
import logo from './assets/dylianai-logo.png';
import illustration from './assets/undraw_artificial-intelligence_fuvd.svg';

export default function HomePage() {
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
            <a href="#" className="text-gray-700 hover:text-indigo-700">Home</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-700">Services</a>
            <a href="#why" className="text-gray-700 hover:text-indigo-700">Why Us</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-700">Contact</a>
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
            <a href="#" className="block text-gray-700 hover:text-indigo-700 font-medium">Home</a>
            <a href="#services" className="block text-gray-700 hover:text-indigo-700 font-medium">Services</a>
            <a href="#why" className="block text-gray-700 hover:text-indigo-700 font-medium">Why Us</a>
            <a href="#contact" className="block text-gray-700 hover:text-indigo-700 font-medium">Contact</a>
          </div>
        )}
      </header>
    <main className="bg-white text-gray-900 font-sans w-full pt-20">
      {/* Hero Section */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <img
          src={illustration}
          alt="AI Illustration"
          className="w-full max-w-xl h-auto mb-10 rounded-lg shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-4">DylianAI</h1>
        <h2 className="text-2xl mb-6">Analytics & Marketing in AI</h2>
        <p className="max-w-xl text-lg mb-8">
          Empowering businesses with cutting-edge AI-driven analytics and marketing solutions.
          Unlock insights, optimize campaigns, and drive growth with DylianAI.
        </p>
        <div className="space-x-4">
          <a href="#contact" className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100">
            Contact Us
          </a>
          <a href="#services" className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100">
            Our Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Our Services</h3>
        <ul className="space-y-4 max-w-3xl mx-auto text-lg">
          <li>✅ AI-powered marketing analytics</li>
          <li>✅ Customer segmentation & targeting</li>
          <li>✅ Predictive campaign optimization</li>
          <li>✅ Real-time business intelligence dashboards</li>
          <li>✅ Custom AI solutions for marketing teams</li>
        </ul>
      </section>

      {/* Why DylianAI Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6">Why DylianAI?</h3>
        <p className="max-w-3xl mx-auto text-lg">
          We combine deep expertise in artificial intelligence with a passion for marketing innovation. Our solutions help you:
        </p>
        <ul className="space-y-2 mt-6 max-w-2xl mx-auto text-left text-lg">
          <li>📊 Gain actionable insights from your data</li>
          <li>🤖 Automate and personalize marketing efforts</li>
          <li>📈 Maximize ROI with data-driven strategies</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center bg-white">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="max-w-xl mx-auto text-lg mb-4">
          Ready to transform your analytics and marketing with AI? Reach out to us to learn more.
        </p>
        <p className="text-indigo-700 text-xl font-semibold">info@dylianai.com</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 DylianAI. All rights reserved.
      </footer>
    </main>
    </>
  );
}