import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../src/app.css"



function App() {
  return (

    <div className="font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
