import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Claudio G.",
        role: "Google Maps",
        content: "Excelente dojo para entrenar, tanto individual como en familia el sensei y los senpai se dan el tiempo de explicar y te hacen sentir muy bienvenido sin importar la edad.",
        rating: 5
    },
    {
        name: "Pilar M.",
        role: "Google Maps",
        content: "Ambiente bastante grato, respetuoso y con muchos valores y principios por parte de los instructores hacia los alumnos.",
        rating: 5
    },
    {
        name: "Andrés R.",
        role: "Google Maps",
        content: "Karate tradicional de verdad. Se nota la trayectoria del sensei.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="testimonios" className="py-32 bg-white relative overflow-hidden text-karate-dark noise-grain border-t border-black/5">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tightest text-karate-dark">De esto se trata <span className="text-gradient-gold">Karate Moreno</span></h2>
                    <p className="max-w-2xl mx-auto text-gray-400 font-light text-sm leading-relaxed">
                        Reseñas 100% reales de estudiantes en Viña del Mar. <br />
                        <a
                            href="https://search.google.com/local/reviews?placeid=ChIJq1lvHODfiZYREK0s4PAjNdA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-karate-gold font-medium hover:underline inline-flex items-center gap-1 mt-2"
                        >
                            Ver todas en Google Maps
                        </a>
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
                            className="relative group p-10 bg-white border border-black/5 rounded-2xl hover:border-karate-gold/20 hover:shadow-xl transition-all duration-500"
                        >
                            <Quote className="absolute top-6 right-8 h-12 w-12 text-black/5 group-hover:text-karate-gold/10 transition-colors duration-500" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-karate-gold text-karate-gold shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
                                ))}
                            </div>

                            <p className="text-gray-600 font-light italic mb-8 leading-relaxed relative z-10">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-karate-gold/10 to-karate-red/10 border border-black/5 flex items-center justify-center text-xs font-bold text-karate-gold">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className="font-bold font-display text-karate-dark text-sm">{testimonial.name}</h4>
                                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
