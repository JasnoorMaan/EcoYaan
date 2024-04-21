// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
