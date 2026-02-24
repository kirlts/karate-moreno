import { ShieldCheck, Focus, Users, Award, MoveUp } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: <Focus className="h-10 w-10 text-karate-gold" />,
        title: "Disciplina y Concentración",
        description: "Mejora en tu capacidad de enfoque. La mente clara es el primer paso para alcanzar tus objetivos dentro y fuera del dojo."
    },
    {
        icon: <MoveUp className="h-10 w-10 text-karate-gold" />,
        title: "Fuerza Física y Mental",
        description: "Aumenta gradualmente tu resistencia. Un entrenamiento integral que templa el cuerpo y espíritu."
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-karate-gold" />,
        title: "Defensa Personal",
        description: "Habilidades reales y efectivas para tu seguridad personal frente a los desafíos de la vida cotidiana."
    },
    {
        icon: <Users className="h-10 w-10 text-karate-gold" />,
        title: "Comunidad",
        description: "Una comunidad cercana de apoyo, respeto e integradora. No entrenas solo, somos una familia marcial."
    },
    {
        icon: <Award className="h-10 w-10 text-karate-gold" />,
        title: "Para Todas las Edades",
        description: "Desde niños hasta adultos. No se requiere experiencia previa para iniciar tu camino marcial."
    }
];

export default function Benefits() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-24 bg-karate-dark relative overflow-hidden text-karate-white">
            {/* Abstract Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-karate-red/40 via-karate-dark to-karate-dark pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-display mb-6"
                    >
                        Empieza Tu Viaje Hoy
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400"
                    >
                        Al estudiar en Karate Moreno, ganarás mucho más que técnica física. Transforma tu vida clase a clase.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block group-hover:scale-110 group-hover:bg-karate-gold/10 transition-all duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-karate-gold transition-colors">{benefit.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-sans">{benefit.description}</p>
                        </motion.div>
                    ))}

                    <motion.div
                        variants={itemVariants}
                        className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-karate-red/30 to-karate-red/10 border-karate-red/30 flex flex-col items-center justify-center text-center col-span-1 md:col-span-2 lg:col-span-1"
                    >
                        <span className="text-4xl font-bold mb-2">¡Comienza!</span>
                        <p className="text-gray-300 mb-6">Tu primera clase es completamente gratuita.</p>
                        <a href="#info" className="btn-primary w-full max-w-[200px] hover:shadow-lg">
                            Ver Horarios
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
