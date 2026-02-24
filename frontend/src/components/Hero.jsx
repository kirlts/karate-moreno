import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function Hero() {
    const phoneNumber = '+56990786368';
    const defaultMessage = encodeURIComponent('Hola Sensei Juan Pedro, vengo de su página web y me gustaría reclamar mi primera clase gratis de Karate Itosu-Ryu.');
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${defaultMessage}`;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-karate-dark">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-karate-dark/80 via-karate-dark/60 to-karate-dark z-10" />
                <img
                    src="/Alumnos del sensei Juan Pedro Moreno realizando un Kata.png"
                    alt="Karate Itosu-Ryu Dojo"
                    className="h-full w-full object-cover object-center scale-105"
                />
            </div>

            <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-karate-gold/30 bg-karate-gold/10 backdrop-blur-sm text-karate-gold text-sm font-semibold tracking-wide uppercase mb-4">
                        <span className="h-2 w-2 rounded-full bg-karate-gold animate-pulse"></span>
                        Tradición Itosu-Ryu en Viña del Mar
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight font-display">
                        Enfrenta Tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-karate-red to-orange-500">Inseguridades</span> y Desafíos
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Forja tu disciplina, fuerza y confianza bajo la guía del Sensei Juan Pedro Moreno. Descubre el verdadero Karate Do.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary w-full sm:w-auto text-lg group"
                        >
                            <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                            Reclamar Primera Clase Gratis
                        </a>

                        <a
                            href="#about"
                            className="btn-secondary w-full sm:w-auto text-lg"
                        >
                            Conocer al Sensei
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-xs uppercase tracking-widest font-semibold">Descubrir</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown className="h-6 w-6 text-karate-gold" />
                </motion.div>
            </motion.div>
        </section>
    );
}
