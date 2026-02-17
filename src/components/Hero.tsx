import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse follow logic
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 30,
      y: (clientY / innerHeight - 0.5) * 30,
    });
  };

  const springX = useSpring(mousePosition.x, { stiffness: 40, damping: 25 });
  const springY = useSpring(mousePosition.y, { stiffness: 40, damping: 25 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[110vh] w-full overflow-hidden flex items-center justify-center bg-slate-50 pt-20"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ x: springX, y: springY }}
          className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-br from-primary/20 to-purple-200/20 rounded-full blur-[120px] mix-blend-multiply" 
        />
        <motion.div 
          style={{ x: springY, y: springX }} // Swapped for variation
          className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-gradient-to-tr from-secondary/30 to-teal-200/20 rounded-full blur-[100px] mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          style={{ y: y1, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-sm text-sm font-bold text-slate-600 mb-8 hover:scale-105 transition-transform origin-left cursor-default">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="tracking-wide uppercase text-xs">O #1 Pet Shop de Luxo</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95] mb-8">
            Pet Feliz:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-rose-500 animate-gradient-x">
              Amor em <br/>cada detalhe
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Uma curadoria exclusiva de produtos e serviços para quem entende que o pet é parte da família.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group relative px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                Ver Produtos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            
            <button className="px-10 py-5 bg-white/40 backdrop-blur-xl border border-white/60 text-slate-900 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg">
              Nossos Serviços
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Visuals */}
        <motion.div 
          style={{ y: y2, opacity }}
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/5] lg:aspect-square order-1 lg:order-2 perspective-1000"
        >
          {/* Main Visual Card */}
          <div className="absolute inset-4 lg:inset-10 bg-gradient-to-b from-white/80 to-white/20 backdrop-blur-2xl rounded-[3rem] border border-white/50 shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-700">
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Happy Dog"
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-overlay" />
          </div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-0 right-0 lg:-right-4 bg-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 max-w-[150px]"
          >
            <div className="flex -space-x-3 mb-3">
               {[1,2,3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
               ))}
            </div>
            <p className="text-xs font-bold text-slate-800">+2k Clientes Felizes</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 25, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -left-4 lg:left-0 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/60"
          >
             <div className="flex items-center gap-4">
               <div className="bg-green-100 p-3 rounded-2xl">
                 <Star className="w-6 h-6 text-green-600 fill-green-600" />
               </div>
               <div>
                 <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Satisfação</p>
                 <p className="text-xl font-black text-slate-800">100%</p>
               </div>
             </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-300 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;