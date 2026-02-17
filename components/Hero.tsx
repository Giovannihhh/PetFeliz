import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile to optimize performance
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax effects - reduced range for better mobile performance
  const y1 = useTransform(scrollY, [0, 500], [0, isMobile ? 50 : 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, isMobile ? -40 : -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Mouse follow logic - Disabled on mobile
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 30,
      y: (clientY / innerHeight - 0.5) * 30,
    });
  };

  const springX = useSpring(mousePosition.x, { stiffness: 40, damping: 25 });
  const springY = useSpring(mousePosition.y, { stiffness: 40, damping: 25 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-slate-50 pt-24 pb-12 lg:pt-20 lg:pb-0"
    >
      {/* Dynamic Background - Static on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ x: isMobile ? 0 : springX, y: isMobile ? 0 : springY }}
          className="absolute top-[-10%] right-[-10%] w-[80vw] lg:w-[60vw] h-[80vw] lg:h-[60vw] bg-gradient-to-br from-primary/20 to-purple-200/20 rounded-full blur-[80px] lg:blur-[120px] mix-blend-multiply" 
        />
        <motion.div 
          style={{ x: isMobile ? 0 : springY, y: isMobile ? 0 : springX }} 
          className="absolute bottom-[-10%] left-[-10%] w-[70vw] lg:w-[50vw] h-[70vw] lg:h-[50vw] bg-gradient-to-tr from-secondary/30 to-teal-200/20 rounded-full blur-[60px] lg:blur-[100px] mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          style={{ y: isMobile ? 0 : y1, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-sm text-sm font-bold text-slate-600 mb-6 lg:mb-8 hover:scale-105 transition-transform origin-left cursor-default">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="tracking-wide uppercase text-[10px] lg:text-xs">O #1 Pet Shop de Luxo</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95] mb-6 lg:mb-8">
            Pet Feliz:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-rose-500 animate-gradient-x">
              Amor em <br/>cada detalhe
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg lg:text-xl text-slate-600 mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Uma curadoria exclusiva de produtos e serviços para quem entende que o pet é parte da família.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <button className="group relative px-8 py-4 lg:px-10 lg:py-5 bg-slate-900 text-white rounded-full font-bold text-lg overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-1 w-full sm:w-auto justify-center flex">
              <span className="relative z-10 flex items-center gap-2">
                Ver Produtos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            
            <button className="px-8 py-4 lg:px-10 lg:py-5 bg-white/40 backdrop-blur-xl border border-white/60 text-slate-900 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg w-full sm:w-auto">
              Nossos Serviços
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Visuals */}
        <motion.div 
          style={{ y: isMobile ? 0 : y2, opacity }}
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[500px] lg:max-w-none mx-auto aspect-[4/5] lg:aspect-square order-1 lg:order-2 perspective-1000"
        >
          {/* Main Visual Card */}
          <div className="absolute inset-4 lg:inset-10 bg-gradient-to-b from-white/80 to-white/20 backdrop-blur-2xl rounded-[2.5rem] lg:rounded-[3rem] border border-white/50 shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-700">
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Happy Dog"
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-overlay" />
          </div>

          {/* Floating Elements - Adjusted positions for mobile */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-0 right-0 lg:-right-4 bg-white p-4 lg:p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 max-w-[120px] lg:max-w-[150px]"
          >
            <div className="flex -space-x-2 lg:-space-x-3 mb-2 lg:mb-3">
               {[1,2,3].map(i => (
                 <div key={i} className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-slate-200 border-2 border-white" />
               ))}
            </div>
            <p className="text-[10px] lg:text-xs font-bold text-slate-800">+2k Clientes Felizes</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 25, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-6 -left-2 lg:bottom-10 lg:left-0 bg-white/90 backdrop-blur-xl p-4 lg:p-6 rounded-3xl shadow-xl border border-white/60"
          >
             <div className="flex items-center gap-3 lg:gap-4">
               <div className="bg-green-100 p-2 lg:p-3 rounded-2xl">
                 <Star className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 fill-green-600" />
               </div>
               <div>
                 <p className="text-[10px] lg:text-xs text-slate-500 font-bold uppercase tracking-wider">Satisfação</p>
                 <p className="text-lg lg:text-xl font-black text-slate-800">100%</p>
               </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
      
      {/* Scroll indicator removed as requested */}
    </section>
  );
};

export default Hero;