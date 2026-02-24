import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(false);
    const phoneNumber = '+56990786368';
    const defaultMessage = encodeURIComponent('Hola Sensei Juan Pedro, vengo de su página web y me gustaría reclamar mi primera clase gratis de Karate Itosu-Ryu.');

    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${defaultMessage}`;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.5
            }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#20bd5a] transition-all duration-200 ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="h-7 w-7 text-white" />
        </motion.a>
    );
}
