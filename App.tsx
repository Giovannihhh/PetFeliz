import React, { Suspense, lazy } from 'react';
import { CartProvider } from './context/CartContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import Hero from './components/Hero';

// Lazy load components that are not immediately visible
const Services = lazy(() => import('./components/Services'));
const Products = lazy(() => import('./components/Products'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="w-full py-20 flex justify-center items-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <CartProvider>
      <main className="relative w-full bg-slate-50 min-h-screen">
        <CustomCursor />
        <Navbar />
        <CartSidebar />
        
        {/* Hero loads immediately for LCP */}
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <Services />
          <Products />
          <Testimonials />
          <WhyChooseUs />
          <Footer />
        </Suspense>
      </main>
    </CartProvider>
  );
};

export default App;