'use client';
import { FormField } from '../../types/form';

interface Props {
    selectedField: FormField | undefined;
    updateField: (id: string, data: Partial<FormField>) => void;
}

const FieldEditor = ({ selectedField, updateField }: Props) => {
    if (!selectedField) return <div>Select a field to edit</div>;

    const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateField(selectedField.id, { label: e.target.value });
    };

    const handleOptionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const options = e.target.value.split(',').map((opt) => opt.trim());
        updateField(selectedField.id, { options });
    };

    return (
        <div className="p-4 border space-y-2">
            <div>
                <label className="block text-sm">Label</label>
                <input
                    value={selectedField.label}
                    onChange={handleLabelChange}
                    className="p-1 border w-full"
                />
            </div>

            {selectedField.type === 'dropdown' && (
                <div>
                    <label className="block text-sm">Options (comma-separated)</label>
                    <input
                        value={selectedField.options?.join(', ') || ''}
                        onChange={handleOptionsChange}
                        className="p-1 border w-full"
                    />
                </div>
            )}
        </div>
    );
};

export default FieldEditor;
