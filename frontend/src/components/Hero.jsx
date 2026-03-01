import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle, MoveUp } from 'lucide-react';
import { Spotlight } from './Spotlight';

export default function Hero() {
    const phoneNumber = '+56990786368';
    const defaultMessage = encodeURIComponent('Hola Sensei Juan Pedro, vengo de su página web y me gustaría reclamar mi primera clase gratis de Karate Itosu-Ryu.');
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${defaultMessage}`;

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-karate-white noise-grain">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20 opacity-40"
                fill="oklch(var(--karate-gold))"
            />

            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-karate-white/95 via-karate-white/80 to-karate-white z-10" />
                <img
                    src={`${import.meta.env.BASE_URL}Alumnos del sensei Juan Pedro Moreno realizando un Kata.png`}
                    alt="Karate Itosu-Ryu Dojo"
                    className="h-full w-full object-cover object-center scale-105 opacity-60"
                />
            </div>

            <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-karate-red/10 border border-karate-red/20 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-karate-red animate-pulse"></span>
                        <span className="text-karate-red text-[10px] font-bold uppercase tracking-widest">Karate Tradicional • Viña del Mar</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tightest text-karate-dark mb-6 leading-[1.1] font-display">
                        Enfrenta Tus <br />
                        <span className="text-gradient-gold text-6xl md:text-8xl">Inseguridades</span> y Desafíos
                    </h1>

                    <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed font-sans font-light">
                        ¿Sientes que tú o tus hijos podrían ser más fuertes, tanto física como mentalmente? En <span className="text-karate-dark font-medium">Karate Moreno</span> entendemos estos desafíos y estamos aquí para ayudarte a superarlos.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                        <a href="#info" className="btn-primary flex items-center gap-2 shadow-xl shadow-karate-red/10" aria-label="Ir a la información para tu primera clase gratis">
                            Primera Clase Gratis <MoveUp className="rotate-45 w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
