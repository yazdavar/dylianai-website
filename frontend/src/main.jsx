import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import TermsAndConditions from './TermsAndConditions.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import TermsAndConditions from './TermsAndConditions.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);