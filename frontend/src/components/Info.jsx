import { MapPin, Clock, CalendarDays, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Info() {
    const phoneNumber = '+56990786368';
    const displayPhone = '+56 9 9078 6368';

    return (
        <section id="info" className="py-24 bg-[#f7f7f7] relative text-karate-dark">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row"
                >
                    {/* Header/Callout */}
                    <div className="md:w-2/5 md:min-h-full bg-karate-dark text-white p-10 flex flex-col justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-karate-dark to-black" />

                        <div className="relative z-10">
                            <h3 className="uppercase tracking-widest text-sm font-semibold text-karate-gold mb-4">Información Práctica</h3>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Ven a entrenar con nosotros</h2>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                ¡Tu primera clase es completamente gratis! No necesitas experiencia previa para integrarte a nuestra familia.
                            </p>

                            <a
                                href={`https://wa.me/${phoneNumber.replace('+', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-karate-red px-6 py-4 rounded-xl font-semibold hover:bg-red-700 transition"
                            >
                                <Phone className="w-5 h-5 animate-pulse" />
                                Agendar Vía WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="md:w-3/5 p-10 lg:p-14 bg-white grid gap-8">
                        <div className="flex gap-5">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-sm">
                                    <MapPin className="text-karate-red w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-1 text-gray-900">Ubicación</h4>
                                <p className="text-gray-600">Arlegui 1273, segundo piso.<br />Viña del Mar.</p>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gray-100"></div>

                        <div className="flex gap-5">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-sm">
                                    <CalendarDays className="text-karate-gold w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-1 text-gray-900">Días de Clases</h4>
                                <p className="text-gray-600">Lunes a Jueves.</p>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gray-100"></div>

                        <div className="flex gap-5">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-sm">
                                    <Clock className="text-karate-dark w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-1 text-gray-900">Horarios</h4>
                                <p className="text-gray-600"><strong>18:30 a 19:30 hrs</strong>.<br />Para todas las edades en una comunidad integradora.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
