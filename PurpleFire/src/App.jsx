/* eslint-disable no-unused-vars */

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import ProductPageNeedus from './ui/pages/ProductPageNeedus/ProductPageNeedus';
import LandingPageAntic from './ui/pages/LandingPageAntic/LandingPageAntic';

import PrimaryButton from "./ui/components/needus/PrimaryButton/PrimaryButton";

import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

import "./App.css";

function Navigation() {
  const navigate = useNavigate();

  const handleNeedusClick = () => {
    navigate('/needus');
  };

  const handleAnticClick = () => {
    navigate('/antic');
  };

  return (
    <div>
      <PrimaryButton
        text="Needus PDP"
        onClick={handleNeedusClick}
        className="primary-button"
      />
      <PrimaryButton
        text="Antic Landing Page"
        onClick={handleAnticClick}
        className="secondary-button"
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/needus" element={<ProductPageNeedus />} />
        <Route path="/antic" element={<LandingPageAntic />} />
      </Routes>
    </Router>
  );
}

export default App;