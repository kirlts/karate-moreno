import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Sensei() {
    const [isExpanded, setIsExpanded] = useState(null); // 'sensei' | 'style' | null

    return (
        <section id="about" className="py-24 bg-karate-white text-karate-dark relative overflow-hidden noise-grain border-y border-black/5">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-karate-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <article className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                    {/* Image side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative p-2 rounded-2xl bg-gradient-to-b from-karate-gold/20 to-transparent">
                            <div className="relative rounded-xl overflow-hidden aspect-[4/5] max-w-md mx-auto border border-black/5 shadow-2xl">
                                <img
                                    src={`${import.meta.env.BASE_URL}Sensei Juan Pedro Moreno.png`}
                                    alt="Sensei Juan Pedro Moreno"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <p className="font-display font-bold text-3xl tracking-tight text-white mb-1">Juan Pedro Moreno</p>
                                    <p className="text-karate-gold font-bold text-xs uppercase tracking-widest opacity-90">Sensei Itosu-Ryu Chile</p>
                                </div>
                            </div>
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -top-6 -right-4 md:-right-6 bg-karate-red px-6 py-4 shadow-xl z-20"
                        >
                            <p className="text-white font-display font-black text-2xl leading-none italic">+40 Años</p>
                            <p className="text-white/90 text-[10px] uppercase font-bold tracking-tight">De Experiencia</p>
                        </motion.div>

                        {/* Official Seal Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="absolute -bottom-6 -right-4 md:-right-6 bg-white border-2 border-karate-gold p-4 rounded-full shadow-2xl z-20 w-32 h-32 flex flex-col items-center justify-center text-center leading-tight"
                        >
                            <span className="text-karate-gold text-[8px] font-bold uppercase tracking-tighter">Representante Oficial</span>
                            <span className="text-karate-dark font-display font-black text-xs">ITOSU-RYU CHILE</span>
                            <div className="w-8 h-px bg-karate-gold/30 my-1"></div>
                            <span className="text-gray-400 text-[8px] font-medium tracking-tighter">Japan Karatedo Itosu-kai</span>
                        </motion.div>
                    </motion.div>

                    {/* Texts side */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tightest leading-none text-karate-dark">
                                Sensei Actual <span className="text-gradient-gold">Juan Pedro</span> Moreno Arenas
                            </h2>
                            <p className="text-karate-red font-bold text-sm uppercase tracking-[0.2em]">Tradición en Karate Itosu Kai Chile (V Región) y Defensa Personal</p>
                            <div className="h-1 w-24 bg-karate-red rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-lg text-gray-500 leading-relaxed font-sans font-light">
                            <p>
                                Con el <span className="text-karate-dark font-medium italic">Sensei Juan Pedro Moreno Arenas</span>, Director Técnico Representante oficial en Chile del estilo Itosu-Ryu (<strong className="font-normal text-karate-dark font-medium">Itosu Kai Chile</strong>) y con más de 40 años de experiencia en la enseñanza en <strong className="font-normal text-karate-dark font-medium">Viña del Mar</strong>, encontrarás la guía que necesitas.
                            </p>
                            <p>
                                Continuador del legado de su padre, el Shihan <span className="text-karate-dark font-medium">Pedro Moreno Chapa</span>, el Sensei Moreno combina experiencia internacional con una pasión por enseñar en la <strong className="font-normal text-karate-dark font-medium">V Región</strong> a niños y adultos que buscan recuperar su fortaleza física y disciplina mental.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setIsExpanded(isExpanded === 'sensei' ? null : 'sensei')}
                                className="flex items-center gap-2 text-karate-red font-bold text-sm uppercase tracking-widest hover:text-red-700 transition-colors"
                                aria-expanded={isExpanded === 'sensei'}
                                aria-controls="sensei-info"
                                aria-label={isExpanded === 'sensei' ? "Ocultar biografía del Sensei" : "Ver biografía detallada del Sensei"}
                            >
                                {isExpanded === 'sensei' ? (
                                    <>Trayectoria del Sensei <ChevronUp className="w-4 h-4" /></>
                                ) : (
                                    <>Trayectoria del Sensei <ChevronDown className="w-4 h-4" /></>
                                )}
                            </button>

                            <button
                                onClick={() => setIsExpanded(isExpanded === 'style' ? null : 'style')}
                                className="flex items-center gap-2 text-karate-gold font-bold text-sm uppercase tracking-widest hover:text-amber-700 transition-colors"
                                aria-expanded={isExpanded === 'style'}
                                aria-controls="style-info"
                                aria-label={isExpanded === 'style' ? "Ocultar historia del estilo" : "Leer sobre la historia del estilo Itosu-Ryu"}
                            >
                                {isExpanded === 'style' ? (
                                    <>Historia Itosu-Ryu <ChevronUp className="w-4 h-4" /></>
                                ) : (
                                    <>Historia Itosu-Ryu <ChevronDown className="w-4 h-4" /></>
                                )}
                            </button>
                        </div>

                        <AnimatePresence mode="wait">
                            {isExpanded === 'sensei' && (
                                <motion.div
                                    key="sensei-info"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-8 rounded-xl bg-gray-50 border border-black/5 shadow-inner space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start gap-4">
                                                <div className="w-1 h-12 bg-karate-red rounded-full"></div>
                                                <h3 className="text-xl font-bold font-display text-karate-dark">Trayectoria</h3>
                                            </div>
                                            <span className="text-2xl" title="Chile">🇨🇱</span>
                                        </div>
                                        <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                                            <p>
                                                Juan Pedro Moreno Arenas, actual representante oficial del estilo Itosu-Ryu (Japón) para <strong className="font-normal">Itosu Kai Chile</strong>, lidera el dojo con una visión que une la tradición heredada de su padre, el Shihan Pedro Moreno Chapa, con los estándares técnicos contemporáneos de la enseñanza marcial en nuestro país.
                                            </p>
                                            <p>
                                                Como medallista internacional y formador de alto nivel, el Sensei Moreno aporta su experiencia en competencia de élite para guiar a alumnos desde los 7 años en un camino de disciplina y superación personal en nuestro dojo de <strong className="font-normal">Viña del Mar, Valparaíso</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {isExpanded === 'style' && (
                                <motion.div
                                    key="style-info"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-8 rounded-xl bg-gray-50 border border-black/5 shadow-inner space-y-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-start gap-4">
                                                <div className="w-1 h-12 bg-karate-gold rounded-full"></div>
                                                <h4 className="text-xl font-bold font-display text-karate-dark">El Legado de Anko Itosu</h4>
                                            </div>
                                            <img
                                                src={`${import.meta.env.BASE_URL}Logo Karate Itosukai.png`}
                                                alt="Logo Itosu-Ryu"
                                                className="h-12 w-auto object-contain opacity-80"
                                            />
                                        </div>
                                        <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                                            <p>
                                                El Itosu-Ryu tiene sus raíces en el genio de <strong>Anko Itosu</strong> (1831-1915), una figura central en la transición del karate hacia el mundo moderno. Fue el visionario que permitió que un arte de combate antes secreto se convirtiera en una herramienta de formación física y mental accesible para todos, introduciéndolo formalmente en las escuelas de Okinawa y diseñando métodos como los katas Pinan para facilitar su aprendizaje sin perder la esencia del Shuri-te.
                                            </p>
                                            <p>
                                                Este linaje fue preservado y formalizado más tarde por <strong>Ryusho Sakagami</strong> (3er Soke), quien en 1969 estableció oficialmente el nombre "Itosu-Ryu" para distinguir esta rama de otras evoluciones del karate. Su labor fue fundamental para salvaguardar la pureza de los katas tradicionales de Okinawa, fundando la organización internacional que hasta hoy protege este estilo caracterizado por su profundidad técnica y respeto a la tradición.
                                            </p>
                                            <p>
                                                Tras el fallecimiento de Sakagami en 1993, el legado continuó bajo la guía de su hijo <strong>Sadaaki Sakagami</strong>. En Chile, nuestra escuela de <strong className="font-normal">Karate Itosu Kai Chile</strong> mantiene este vínculo directo y oficial, siendo la única autorizada en la <strong className="font-normal">Quinta Región</strong> para impartir este linaje de la Japan Karatedo Itosu-kai. Es esta conexión directa con las raíces lo que nos permite ofrecer una práctica auténtica aquí en <strong className="font-normal">Viña del Mar</strong>, donde la tradición se une con la exigencia moderna.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </article>
            </div>
        </section>
    );
}
