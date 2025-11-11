import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import TermsAndConditions from './TermsAndConditions.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import './index.css';
import SmsOptInPolicy from './SmsOptInPolicy.jsx';
import SmsOptInConsent from './SmsOptInConsent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* <Route path="/sms-opt-in-policy" element={<SmsOptInPolicy />} /> */}
        {/* <Route path="/sms-opt-in" element={<SmsOptInConsent />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);