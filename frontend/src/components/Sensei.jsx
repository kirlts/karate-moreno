import { motion } from 'framer-motion';

export default function Sensei() {
    return (
        <section id="about" className="py-24 bg-white text-karate-dark relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-karate-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
                            {/* Fallback color if image is missing */}
                            <div className="absolute inset-0 bg-karate-dark/10"></div>
                            <img
                                src={`${import.meta.env.BASE_URL}Sensei Juan Pedro Moreno.png`}
                                alt="Sensei Juan Pedro Moreno"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white leading-tight">
                                <p className="font-display font-bold text-2xl drop-shadow-md">Juan Pedro Moreno Arenas</p>
                                <p className="text-karate-gold font-medium mb-1 drop-shadow-sm">Director Técnico Representante en Chile</p>
                                <div className="w-12 h-1 bg-karate-red mt-3"></div>
                            </div>
                        </div>

                        {/* Decorator */}
                        <div className="absolute -bottom-6 -right-6 lg:-right-10 w-48 h-48 bg-karate-dark rounded-xl -z-10 shadow-xl opacity-10"></div>
                    </motion.div>

                    {/* Texts side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl font-bold font-display mb-4 tracking-tight">
                                Tradición en Karate <span className="text-karate-red">Itosu-Ryu</span> y Defensa Personal
                            </h2>
                            <div className="h-1.5 w-20 bg-karate-gold mb-6 rounded-full"></div>
                        </div>

                        <div className="space-y-5 text-lg text-gray-700 leading-relaxed font-sans">
                            <p>
                                Con el Sensei Juan Pedro Moreno Arenas, y sus más de <strong>40 años de experiencia</strong> en artes marciales, encontrarás la guía y el entrenamiento que necesitas.
                            </p>
                            <p>
                                Continuador del legado de su padre, el respetado Pedro Moreno Chappa, el Sensei Moreno combina experiencia internacional con una pasión por enseñar, ofreciendo clases adecuadas para todos: desde niños hasta adultos que buscan recuperar su fortaleza física y disciplina mental.
                            </p>
                        </div>

                        <div className="bg-gray-50 border-l-4 border-karate-gold p-6 rounded-r-xl shadow-sm mt-8">
                            <h3 className="text-xl font-bold mb-3 font-display">Los Orígenes del Estilo Itosu-Ryu</h3>
                            <p className="text-gray-600">
                                El maestro <strong>Anko Itosu</strong> es considerado uno de los padres del karate moderno y creador de los <em>Katas Pinan (Heian)</em>. Estructuró un linaje enfocado tanto en la salud y el carácter, como en la práctica eficiente de la autodefensa lineal (un golpe, una victoria). Este legado fue formalizado por Ryusho Sakagami, quien consolidó el <em>Japan Karatedo Itosu-kai</em> que nuestra escuela representa oficialmente en Chile.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
