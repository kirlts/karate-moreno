import { MapPin, Clock, CalendarDays, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Info() {
    const phoneNumber = '+56990786368';

    return (
        <section id="info" className="py-24 bg-karate-white relative text-karate-dark noise-grain">
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-karate-gold/10 rounded-full blur-[100px] -translate-x-1/2"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2rem] overflow-hidden border border-black/5 flex flex-col md:flex-row shadow-2xl"
                >
                    {/* Header/Callout */}
                    <div className="md:w-2/5 md:min-h-full bg-gradient-to-br from-gray-50 to-white p-12 flex flex-col justify-center relative border-r border-black/5">
                        <div className="relative z-10 space-y-6">
                            <div>
                                <h3 className="uppercase tracking-[0.3em] text-[10px] font-bold text-karate-gold mb-3">Contacto</h3>
                                <h2 className="text-4xl font-display font-bold tracking-tightest leading-none text-karate-dark">Únete a la Tradición</h2>
                            </div>

                            <p className="text-gray-400 font-light leading-relaxed text-sm text-justify">
                                Ven a conocer nuestro dojo y comienza un primer entrenamiento de cortesía. No se requiere experiencia previa para empezar tu camino.
                            </p>
                        </div>
                    </div>

                    {/* Details & Map */}
                    <div className="md:w-3/5 p-12 lg:p-16 flex flex-col gap-10 bg-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                            <a
                                href="https://maps.app.goo.gl/8dhA8M7c2o44Ah9B6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-4 group cursor-pointer"
                                aria-label="Abrir ubicación del Dojo Itosu Kai en Google Maps"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-black/5 group-hover:border-karate-red/30 group-hover:bg-karate-red/5 transition-colors">
                                        <MapPin className="text-karate-red w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold font-display text-base mb-1 text-karate-dark group-hover:text-karate-red transition-colors">Ubicación</h4>
                                    <p className="text-gray-500 font-light text-xs italic group-hover:text-gray-700 transition-colors">Arlegui 1273, Piso 2.<br />Viña del Mar, Región de Valparaíso (V Región).</p>
                                </div>
                            </a>

                            <div className="flex gap-4 group">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-black/5 group-hover:border-karate-gold/30 transition-colors">
                                        <Clock className="text-karate-gold w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold font-display text-base mb-1 text-karate-dark">Horarios</h4>
                                    <p className="text-gray-500 font-light text-xs">
                                        Lunes a Jueves<br />
                                        <span className="text-karate-dark font-medium italic">18:30 — 19:30 hrs</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Button Refined */}
                        <div className="pt-2">
                            <a
                                href={`https://wa.me/${phoneNumber.replace('+', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex flex-col items-center justify-center p-4 rounded-2xl bg-white border-2 border-karate-gold/20 hover:border-karate-gold hover:bg-karate-gold/5 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
                                aria-label="Escribir por WhatsApp al Sensei Juan Pedro Moreno Arenas"
                            >
                                <div className="flex items-center gap-3 mb-1">
                                    <MessageCircle className="w-6 h-6 text-[#25D366] fill-[#25D366]/10 group-hover:scale-110 transition-transform" />
                                    <span className="font-display font-bold text-karate-dark text-lg">Escribir por WhatsApp</span>
                                </div>
                                <span className="text-karate-gold text-xs font-medium tracking-wider">+56 9 9078 6368</span>

                                {/* Decorative gold glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-karate-gold/0 via-karate-gold/5 to-karate-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </a>
                        </div>

                        {/* Google Maps Integration - Spanish Fixed */}
                        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-black/5 shadow-inner transition-all duration-700">
                            <iframe
                                title="Mapa con la ubicación del dojo Karate Moreno en Viña del Mar"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.1975517112123!2d-71.5464102887897!3d-33.02492547573617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689dfe01c6f59ab%3A0xd03523f0e02cad10!2sKARATE%20MORENO%20ITOSU%20KAI%20CHILE!5e0!3m2!1ses!2scl!4v1772404227362!5m2!1ses!2scl"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
