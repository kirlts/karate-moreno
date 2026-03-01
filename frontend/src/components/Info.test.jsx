import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Info from './Info';

describe('Info Component', () => {
    it('renders the location and phone information', () => {
        render(<Info />);
        expect(screen.getByText(/Arlegui 1273, Piso 2/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Escribir por WhatsApp al Sensei Juan Pedro/i)).toBeInTheDocument();
    });

    it('renders the map iframe with correct title', () => {
        render(<Info />);
        const mapIframe = screen.getByTitle(/Mapa con la ubicación del dojo Karate Moreno en Viña del Mar/i);
        expect(mapIframe).toBeInTheDocument();
    });
});
