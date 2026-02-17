import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full bg-white/60 backdrop-blur-lg border border-white/50 p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-start gap-4">
        <div className={`p-4 rounded-2xl ${service.color}`}>
          <service.icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mt-2">{service.title}</h3>
        <p className="text-slate-600 leading-relaxed">{service.description}</p>
        
        <div className="mt-auto pt-6 flex items-center text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors cursor-pointer">
          Saiba mais
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 lg:w-96 lg:h-96 bg-purple-100/50 rounded-full blur-[80px] lg:blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-800">Cuidado Completo <br/> para seu melhor amigo</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;