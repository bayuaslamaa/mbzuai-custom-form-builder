import { render, screen } from '@testing-library/react';
import FieldPalette from '../src/app/components/FieldPalette';

describe('FieldPalette', () => {
    it('renders draggable field items', () => {
        render(<FieldPalette />);
        expect(screen.getByText(/text field/i)).toBeDefined();
        expect(screen.getByText(/dropdown field/i)).toBeDefined();
        expect(screen.getByText(/checkbox field/i)).toBeDefined();
    });
}); 