import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ShoppingBag, Menu, PawPrint } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { count, setIsOpen } = useCart();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/70 backdrop-blur-md shadow-sm border-b border-white/40' : 'py-4 lg:py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 relative flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-gradient-to-tr from-primary to-orange-400 p-2 rounded-xl text-white shadow-lg group-hover:shadow-primary/40 transition-shadow">
            <PawPrint size={20} fill="currentColor" />
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
            Pet Feliz
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-primary transition-colors">Início</a>
          <a href="#" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#" className="hover:text-primary transition-colors">Produtos</a>
          <a href="#" className="hover:text-primary transition-colors">Sobre</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(true)}
            className="relative p-2 hover:bg-black/5 rounded-full transition-colors group"
          >
            <ShoppingBag className="w-6 h-6 text-slate-800 group-hover:scale-110 transition-transform" />
            {count > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white"
              >
                {count}
              </motion.span>
            )}
          </button>
          <button className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors">
            <Menu className="w-6 h-6 text-slate-800" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;