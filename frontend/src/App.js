import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import Counter from "./components/Counter";
import Signatures from "./components/Signatures";
import Ambiance from "./components/Ambiance";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import MenuPage from "./pages/MenuPage";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

const Home = () => (
  <div className="App relative">
    <div className="grain-overlay" />
    <Hero />
    <Marquee />
    <Story />
    <Counter />
    <Signatures />
    <Ambiance />
    <Reviews />
    <Visit />
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollManager />
        <Navbar />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
