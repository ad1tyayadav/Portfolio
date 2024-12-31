import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './index.css'
import { BlogSection } from './components/BlogSection';
import { Outlet } from 'react-router-dom';
import { TalksSection } from './components/TalksSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Outlet />
        <BlogSection />
        <TalksSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;