import React from 'react';
import { CartProvider } from './context/CartContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <CartProvider>
      <main className="relative w-full bg-slate-50 min-h-screen">
        <CustomCursor />
        <Navbar />
        <CartSidebar />
        
        <Hero />
        <Services />
        <Products />
        <Testimonials />
        <WhyChooseUs />
        <Footer />
      </main>
    </CartProvider>
  );
};

export default App;