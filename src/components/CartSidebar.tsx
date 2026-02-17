import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar: React.FC = () => {
  const { isOpen, setIsOpen, items, removeFromCart, updateQuantity, total, clearCart } = useCart();

  const handleCheckout = () => {
    const phoneNumber = "5511999999999"; // Replace with real number
    const message = `Olá! Gostaria de finalizar meu pedido no Pet Feliz:%0A%0A${items.map(item => `- ${item.quantity}x ${item.name} (${item.price})`).join('%0A')}%0A%0ATotal: R$ ${total.toFixed(2).replace('.', ',')}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-slate-800">Seu Carrinho</h2>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                  <ShoppingBag size={64} className="text-slate-300" />
                  <p className="text-lg font-medium text-slate-500">Seu carrinho está vazio</p>
                  <button onClick={() => setIsOpen(false)} className="text-primary hover:underline">
                    Continuar comprando
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={item.id} 
                    className="flex gap-4 bg-slate-50 p-4 rounded-2xl"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-white shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-slate-800 leading-tight">{item.name}</h3>
                        <p className="text-sm text-slate-500 mt-1">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-semibold text-primary">{item.price}</p>
                        <div className="flex items-center gap-3 bg-white rounded-lg p-1 shadow-sm border border-slate-100">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-primary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-primary transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="self-start text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
                <div className="flex items-center justify-between text-lg font-bold text-slate-800">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-primary transition-colors shadow-lg flex items-center justify-center gap-2 group"
                >
                  Finalizar Compra
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-center text-slate-400">
                  Pagamento seguro via WhatsApp ou Pix
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;