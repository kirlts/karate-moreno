import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Sensei from './Sensei';

describe('Sensei Component', () => {
    it('renders the sensei name', () => {
        render(<Sensei />);
        expect(screen.getByText(/Juan Pedro Moreno Arenas/i)).toBeInTheDocument();
    });

    it('expands the biography section on click', () => {
        render(<Sensei />);
        const bioButton = screen.getByLabelText(/Ver biografía detallada del Sensei/i);
        fireEvent.click(bioButton);
        expect(screen.getByText(/Juan Pedro Moreno Arenas, actual representante oficial/i)).toBeInTheDocument();
    });
});
