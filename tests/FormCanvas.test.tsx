import { render, screen, fireEvent } from '@testing-library/react';
import FormCanvas from '@/app/components/FormCanvas';
import { FormField } from '@/types/form';

describe('FormCanvas', () => {
    const mockSetSelectedFieldId = jest.fn();
    const mockHandleDrop = jest.fn();

    const baseProps = {
        handleDrop: mockHandleDrop,
        selectedFieldId: null,
        setSelectedFieldId: mockSetSelectedFieldId,
    };

    it('renders empty state when no fields are provided', () => {
        render(<FormCanvas {...baseProps} fields={[]} />);
        expect(screen.getByText('Drag fields here')).toBeInTheDocument();
    });

    it('renders a text field when type is text', () => {
        const fields: FormField[] = [
            { id: '1', type: 'text', label: 'Name' }
        ];

        render(<FormCanvas {...baseProps} fields={fields} />);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Name')).toHaveAttribute('type', 'text');
    });

    it('renders a dropdown when type is dropdown', () => {
        const fields: FormField[] = [
            { id: '2', type: 'dropdown', label: 'Country', options: ['USA', 'Canada'] }
        ];

        render(<FormCanvas {...baseProps} fields={fields} />);
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();
        expect(screen.getByText('USA')).toBeInTheDocument();
        expect(screen.getByText('Canada')).toBeInTheDocument();
    });

    it('renders a checkbox when type is checkbox', () => {
        const fields: FormField[] = [
            { id: '3', type: 'checkbox', label: 'Accept Terms' }
        ];

        render(<FormCanvas {...baseProps} fields={fields} />);
        expect(screen.getByLabelText('Accept Terms')).toBeInTheDocument();
        expect(screen.getByLabelText('Accept Terms')).toHaveAttribute('type', 'checkbox');
    });

    it('calls setSelectedFieldId on field click', () => {
        const fields: FormField[] = [
            { id: '4', type: 'text', label: 'Email' }
        ];

        render(<FormCanvas {...baseProps} fields={fields} />);
        const field = screen.getByText('Email').closest('div')!;
        fireEvent.click(field);
        expect(mockSetSelectedFieldId).toHaveBeenCalledWith('4');
    });
});
