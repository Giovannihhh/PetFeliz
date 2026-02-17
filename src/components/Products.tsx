import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 mb-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        
        {/* Floating Add Button */}
        <button 
          onClick={() => addToCart(product)}
          className="absolute bottom-4 right-4 bg-white text-slate-900 p-4 rounded-full shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-slate-900 hover:text-white z-20 flex items-center gap-2"
        >
          <ShoppingBag size={20} />
          <span className="text-sm font-bold pr-1">Adicionar</span>
        </button>

        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wide">
          {product.category}
        </div>
      </div>

      {/* Info */}
      <div className="px-2 pb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-800 leading-tight">{product.name}</h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold text-slate-400">4.9</span>
          </div>
        </div>
        <p className="text-2xl font-light text-slate-500 group-hover:text-primary transition-colors duration-300">
          {product.price}
        </p>
      </div>
    </motion.div>
  );
};

const Products: React.FC = () => {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden rounded-t-[4rem] -mt-10 z-20">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Shopify Editions Style</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Boutique <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Exclusiva</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Produtos selecionados com rigorosa qualidade para garantir o conforto, estilo e alegria do seu pet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-md">
            Ver Coleção Completa
            <Star size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;