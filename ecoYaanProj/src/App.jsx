// import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Products from "./components/Products";
// import Promo from "./components/Promo";
// import Info from "./components/Info";
// import Footer from "./components/Footer";
// import Intro from "./components/Intro";
import HomePage from "../src/components/pages/HomePage";
import AboutPage from "../src/components/pages/AboutPage";

function App() {
  return (
    <HashRouter>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
