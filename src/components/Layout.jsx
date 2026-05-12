import React from 'react';
import { Outlet } from 'react-router-dom';
import NeuralBackground from './NeuralBackground';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 flex flex-col">
      <NeuralBackground />
      <Navbar />
      <main className="relative z-10 pt-28 md:pt-32 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}