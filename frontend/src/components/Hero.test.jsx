import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero Component', () => {
    it('renders the main heading', () => {
        render(<Hero />);
        expect(screen.getByText(/Enfrenta Tus/i)).toBeInTheDocument();
        expect(screen.getByText(/Inseguridades/i)).toBeInTheDocument();
    });

    it('renders the CTA button with correct aria-label', () => {
        render(<Hero />);
        const ctaButton = screen.getByLabelText(/Ir a la información para tu primera clase gratis/i);
        expect(ctaButton).toBeInTheDocument();
        expect(ctaButton).toHaveAttribute('href', '#info');
    });
});
