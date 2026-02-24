import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Estudiante de Defensa Personal",
        role: "Google Review - Viña del Mar",
        content: "Excelente profesor, instalaciones muy cómodas. Se nota la dedicación y la enseñanza del Karate tradicional.",
        rating: 5
    },
    {
        name: "Apoderado",
        role: "Google Review",
        content: "Llevo a mi hijo hace 6 meses y su cambio en concentración y disciplina ha sido tremendo. Totalmente recomendado el Sensei Moreno.",
        rating: 5
    },
    {
        name: "Estudiante Adulto",
        role: "Google Review",
        content: "Un ambiente de mucho respeto. Pensé que no podría integrarme por no saber nada, pero la comunidad y el profesor me ayudaron muchísimo.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white relative text-karate-dark">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold font-display mb-4">Lo que dicen en <span className="text-blue-600">Google</span></h2>
                    <div className="h-1.5 w-20 bg-karate-gold mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg hover:text-gray-900 transition-colors">
                        100% testimonios reales de estudiantes de Defensa Personal en Viña del Mar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div>
                                <h4 className="font-bold font-display text-gray-900">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
