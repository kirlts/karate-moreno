import { ShieldCheck, Focus, Users, Award, MoveUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: <Focus className="h-8 w-8 text-karate-red" />,
        title: "Disciplina",
        description: "Mejora real en la concentración y el respeto a través de la práctica constante."
    },
    {
        icon: <Zap className="h-8 w-8 text-karate-gold" />,
        title: "Fuerza Integral",
        description: "Aumento progresivo de la fuerza física y mental para enfrentar desafíos."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
        title: "Defensa Personal",
        description: "Habilidades prácticas de protección para todas las edades."
    },
    {
        icon: <Users className="h-8 w-8 text-karate-red" />,
        title: "Comunidad",
        description: "Un grupo de apoyo cercano, integrador y basado en el respeto mutuo."
    },
    {
        icon: <Award className="h-8 w-8 text-karate-gold" />,
        title: "Red de Dojos",
        description: "Variedad de horarios y disponibilidad en nuestras sedes de Viña y Santiago."
    }
];

export default function Benefits() {
    return (
        <section id="beneficios" className="py-20 bg-karate-white relative overflow-hidden text-karate-dark noise-grain border-y border-black/5">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-karate-red/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-display tracking-tightest text-karate-dark"
                    >
                        Al estudiar con nosotros, <span className="text-gradient-gold text-nowrap">ganarás:</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 bg-white border border-black/5 rounded-xl overflow-hidden hover:border-karate-gold/30 hover:shadow-lg transition-all duration-500"
                        >
                            <div className="relative z-10">
                                <div className="mb-4 p-2.5 rounded-lg bg-gray-50 inline-block border border-black/5 group-hover:border-karate-gold/20 transition-all duration-500">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-bold font-display mb-2 tracking-tight text-karate-dark group-hover:text-karate-gold transition-colors">{benefit.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-sans font-light text-xs">{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Final CTA Card - More compact and premium */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="col-span-1 sm:col-span-2 lg:col-span-5 mt-6 p-5 rounded-2xl bg-white border border-karate-gold/10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="max-w-xl">
                            <h3 className="text-lg font-bold font-display text-karate-dark mb-1">¿Quieres probar?</h3>
                            <p className="text-gray-500 text-xs font-light">Ven a una clase de prueba en Arlegui 1273 sin costo ni compromiso. ¡Te esperamos!</p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="h-px w-8 bg-karate-gold/30 hidden sm:block"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
