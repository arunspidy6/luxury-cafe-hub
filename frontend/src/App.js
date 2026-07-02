import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import Signatures from "./components/Signatures";
import MenuSection from "./components/MenuSection";
import Ambiance from "./components/Ambiance";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

const Home = () => (
  <div className="App relative">
    <div className="grain-overlay" />
    <Navbar />
    <Hero />
    <Marquee />
    <Story />
    <Signatures />
    <MenuSection />
    <Ambiance />
    <Gallery />
    <Reviews />
    <Visit />
    <Footer />
    <Toaster />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
