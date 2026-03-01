import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Benefits from './Benefits';

describe('Benefits Component', () => {
    it('renders the trial class call to action', () => {
        render(<Benefits />);
        expect(screen.getByText(/¿Quieres probar?/i)).toBeInTheDocument();
        expect(screen.getByText(/Ven a una clase de prueba en Arlegui 1273/i)).toBeInTheDocument();
    });
});
