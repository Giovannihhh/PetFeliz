import { Scissors, Bath, Stethoscope, ShoppingBag, Heart, ShieldCheck, Clock, Award } from 'lucide-react';
import { Service, Product, Testimonial, Feature } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Banho Relaxante',
    description: 'Um spa completo para seu pet com produtos hipoalergênicos e massagem.',
    icon: Bath,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: '2',
    title: 'Tosa Estilizada',
    description: 'Profissionais especialistas em cortes da raça e estilos criativos.',
    icon: Scissors,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    id: '3',
    title: 'Clínica Veterinária',
    description: 'Cuidado médico preventivo e emergencial com tecnologia de ponta.',
    icon: Stethoscope,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: '4',
    title: 'Pet Shop Boutique',
    description: 'Acessórios premium, brinquedos importados e rações super premium.',
    icon: ShoppingBag,
    color: 'bg-purple-100 text-purple-600'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cama Nuvem Confort',
    price: 'R$ 189,90',
    category: 'Conforto',
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Coleira Smart LED',
    price: 'R$ 89,90',
    category: 'Acessórios',
    image: 'https://images.unsplash.com/photo-1605639156481-244775d6f803?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Brinquedo Interativo',
    price: 'R$ 54,90',
    category: 'Diversão',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Ração Natural Bio',
    price: 'R$ 120,00',
    category: 'Alimentação',
    image: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Silva',
    role: 'Mãe do Bob (Golden)',
    content: 'O cuidado que eles têm com o Bob é incrível. Ele volta do banho super feliz e cheiroso. O ambiente é super moderno e limpo.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '2',
    name: 'Carlos Mendes',
    role: 'Pai da Luna (Siamesa)',
    content: 'A clínica veterinária é de outro mundo. Diagnóstico rápido e tratamento humanizado. Recomendo para todos.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '3',
    name: 'Fernanda Costa',
    role: 'Mãe do Pipoca (Pug)',
    content: 'Amo a boutique! Sempre encontro novidades que não vejo em nenhum outro lugar. O atendimento é VIP.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Amor Incondicional',
    description: 'Tratamos seu pet como se fosse nosso. Carinho é a base de tudo.',
    icon: Heart
  },
  {
    id: '2',
    title: 'Segurança Total',
    description: 'Ambientes monitorados e profissionais certificados.',
    icon: ShieldCheck
  },
  {
    id: '3',
    title: 'Agilidade',
    description: 'Agendamento online fácil e pontualidade nos serviços.',
    icon: Clock
  },
  {
    id: '4',
    title: 'Qualidade Premium',
    description: 'Utilizamos apenas os melhores produtos do mercado mundial.',
    icon: Award
  }
];