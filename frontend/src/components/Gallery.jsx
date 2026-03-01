import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';

const images = [
    { url: 'Alumnos del sensei Juan Pedro Moreno realizando un Kata.png', title: 'Entrenamiento de Katas', category: 'Práctica' },
    { url: 'Sensei Juan Pedro Moreno con sus estudiantes.png', title: 'Clase Grupal', category: 'Comunidad' },
    { url: 'Integrándose desde la primera clase de Karate_edited.jpg', title: 'Nuevos Alumnos', category: 'Iniciación' },
    { url: 'Defensa Personal.png', title: 'Técnicas de Defensa', category: 'Seguridad' },
    { url: 'Sensei Juan Pedro Moreno.png', title: 'Sensei Juan Pedro', category: 'Maestro' },
    { url: 'Sensei Juan Pedro Moreno entrenado en el Dojo karate kaizen.png', title: 'Perfeccionamiento', category: 'Dojo' },
    { url: 'Sensei Juan Pedro Moreno en Dinamarca.png', title: 'Trayectoria Internacional', category: 'Dinamarca' },
    { url: 'Sensei Juan Pedro Moreno premiado en Canadá_edited.jpg', title: 'Reconocimiento Internacional', category: 'Canadá' },
    { url: 'Sensei Juan Pedro Moreno premiado en Dinamarca.png', title: 'Logros en Europa', category: 'Premios' },
    { url: 'Sensei Pedro Moreno padre e hijo actual sensei Pedro Moreno_edited.jpg', title: 'Legado de Familia', category: 'Tradición' },
    { url: 'Sensei Pedro Moreno hijo entrenando a su hija en karate Itosu Ryu.png', title: 'Tercera Generación', category: 'Familia' },
    { url: 'Reconocimiento a la trayectoria del padre del sensei Juan Pedro Moreno_edited.jpg', title: 'Historia Itosukai', category: 'Historia' },
    { url: 'tradición familiar de karate.jpg', title: 'Valores que trascienden', category: 'Raíces' },
    { url: 'Sensei Juan Pedro Moreno en entrevista en diario La Estrella.png', title: 'Presencia en Medios', category: 'Prensa' },
    { url: 'Kit de competinción del Sensei Juan Pedro Moreno.png', title: 'Espíritu Competitivo', category: 'Logros' },
    { url: 'Sensei Juan Pedro Moreno posando con su sensei en Canadá_edited.jpg', title: 'Linaje Directo', category: 'Maestría' }
];

export default function Gallery() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const visibleImages = isExpanded ? images : images.slice(0, 4);

    return (
        <section id="galeria" className="py-24 bg-gray-50 noise-grain overflow-hidden border-b border-black/5">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl font-bold font-display tracking-tightest text-karate-dark"
                        >
                            <span className="text-gradient-gold">Nuestra</span> Galería
                        </motion.h2>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <p className="max-w-md text-gray-400 font-light leading-relaxed text-right text-xs">
                            Fotos reales de nuestras clases, seminarios internacionales y la tradición familiar que mantenemos viva en Viña del Mar.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <AnimatePresence mode="popLayout">
                        {visibleImages.map((img) => (
                            <motion.div
                                key={img.url}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedImage(img)}
                                className="group relative aspect-square rounded-xl overflow-hidden border border-black/5 bg-white cursor-zoom-in"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}${img.url}`}
                                    alt={`Foto de ${img.title} en el dojo de Karate Moreno`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                    <p className="text-karate-gold text-[10px] uppercase font-bold tracking-widest">{img.category}</p>
                                    <p className="text-white text-xs font-medium">{img.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-12 flex justify-center">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="btn-secondary flex items-center gap-3 py-3 px-10 shadow-sm"
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? "Mostrar menos fotos de la galería" : `Mostrar ${images.length - 4} fotos adicionales de la galería`}
                    >
                        {isExpanded ? (
                            <>Ver menos <ChevronUp className="w-4 h-4" /></>
                        ) : (
                            <>Ver más fotos ({images.length - 4}) <ImageIcon className="w-4 h-4" /></>
                        )}
                    </button>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-4"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}${selectedImage.url}`}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            />
                            <div className="text-center">
                                <p className="text-karate-gold text-xs font-bold uppercase tracking-widest mb-1">{selectedImage.category}</p>
                                <h3 className="text-white text-xl font-display font-bold">{selectedImage.title}</h3>
                            </div>
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-0 right-0 p-4 text-white hover:text-karate-gold transition-colors"
                                aria-label="Cerrar vista de imagen"
                            >
                                <ChevronUp className="w-8 h-8 rotate-180" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
