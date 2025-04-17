import { FormField } from '../src/types/form';

const updateField = (fields: FormField[], id: string, data: Partial<FormField>) => {
  return fields.map(f => (f.id === id ? { ...f, ...data } : f));
};

describe('updateField', () => {
  it('updates the label of the correct field', () => {
    const original: FormField[] = [
      { id: '1', type: 'text', label: 'A' },
      { id: '2', type: 'checkbox', label: 'B' }
    ];
    const result = updateField(original, '1', { label: 'Updated' });

    expect(result[0].label).toBe('Updated');
    expect(result[1].label).toBe('B');
  });
});
