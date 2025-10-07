import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";         // OLD header (Home par)
import InnerHeader from "./components/InnerHeader";   // NEW header (baaki sab par)
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./app.css";

function App() {
  const { pathname } = useLocation();

  // Sirf "/" par old header, baaki sab paths par new header
  const showNewHeader = pathname !== "/";

  return (
    <div className="font-sans">
      {showNewHeader ? <InnerHeader /> : <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
          NOTE: Tumhare project me jo pages hain unke routes yahan add karte jao.
          Example:
          <Route path="/login" element={<Login />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
       </Routes>

      <Footer />
    </div>
  );
}

export default App;
