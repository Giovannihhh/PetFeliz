import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left: Image/Graphic */}
          <div className="flex-1 w-full relative order-2 lg:order-1">
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8 }}
               className="relative aspect-square max-w-md mx-auto"
            >
               <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
               <img 
                 src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                 alt="Happy Pet"
                 loading="lazy"
                 className="relative z-10 rounded-3xl object-cover w-full h-full shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
               />
               <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
                 <p className="font-bold text-slate-800 text-lg">98%</p>
                 <p className="text-slate-500 text-sm">Clientes Satisfeitos</p>
               </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
               <Quote className="w-12 h-12 text-primary/30 mb-8" />
               
               <div className="min-h-[280px] sm:min-h-[250px] relative">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={currentIndex}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.5 }}
                     className="absolute inset-0"
                   >
                     <p className="text-xl md:text-3xl lg:text-4xl font-light text-slate-700 leading-tight mb-8">
                       "{TESTIMONIALS[currentIndex].content}"
                     </p>
                     
                     <div className="flex items-center gap-4">
                       <img 
                         src={TESTIMONIALS[currentIndex].avatar} 
                         alt={TESTIMONIALS[currentIndex].name}
                         loading="lazy"
                         className="w-12 h-12 rounded-full object-cover" 
                       />
                       <div>
                         <h4 className="font-bold text-slate-900">{TESTIMONIALS[currentIndex].name}</h4>
                         <p className="text-primary text-sm font-medium">{TESTIMONIALS[currentIndex].role}</p>
                       </div>
                     </div>
                   </motion.div>
                 </AnimatePresence>
               </div>

               <div className="flex gap-4 mt-4 lg:mt-8">
                 <button onClick={prev} aria-label="Anterior" className="p-3 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors">
                   <ChevronLeft className="w-6 h-6 text-slate-600" />
                 </button>
                 <button onClick={next} aria-label="Próximo" className="p-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                   <ChevronRight className="w-6 h-6" />
                 </button>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;