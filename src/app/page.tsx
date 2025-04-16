'use client'; // Indicates that this component is a client-side component.

import { useState } from 'react'; // Importing useState hook for managing state.
import FieldPalette from './components/FieldPalette'; // Importing FieldPalette component.
import FormCanvas from './components/FormCanvas'; // Importing FormCanvas component.
import JSONViewer from './components/JSONViewer'; // Importing JSONViewer component.
import DownloadButton from './components/DownloadButton'; // Importing DownloadButton component.
import { FormField, FieldType } from '../types/form'; // Importing types for form fields.
import FieldEditor from './components/FieldEditor';

export default function HomePage() {
  const [fields, setFields] = useState<FormField[]>([]); // State to store form fields.
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);
  const handleDrop = (e: React.DragEvent) => {
    const fieldType = e.dataTransfer.getData('fieldType') as FieldType; // Get field type from drag event.

    if (fieldType) {
      const newField: FormField = {
        id: crypto.randomUUID(), // Generate unique ID for new field.
        type: fieldType,
        label: 'Untitled',
      };
      setFields([...fields, newField]); // Add new field to state.
    }
  };

  const handleRemoveDrop = (e: React.DragEvent) => {
    const fieldId = e.dataTransfer.getData('removeFieldId'); // Get field ID from drag event.
    if (fieldId) {
      setFields(fields.filter((field) => field.id !== fieldId)); // Remove field from state.
    }
  };

  const updateField = (id: string, data: Partial<FormField>) => {
    setFields((prev) =>
      prev.map((field) => (field.id === id ? { ...field, ...data } : field))
    );
  };

  const selectedField = fields.find((f) => f.id === selectedFieldId);

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleRemoveDrop}  // Handle drop event to remove field.
      className="p-4 space-y-4 h-screen"
    >
      <h1 className="text-2xl font-bold">Custom Form Builder</h1>
      <div className="flex gap-4">
        <FieldPalette /> {/* Component for selecting field types */}
        <FormCanvas fields={fields} handleDrop={handleDrop} selectedFieldId={selectedFieldId} setSelectedFieldId={setSelectedFieldId} /> {/* Canvas for form fields */}
        <div>
          <JSONViewer fields={fields} /> {/* Component to view fields as JSON */}
          <DownloadButton fields={fields} /> {/* Button to download fields as JSON */}
        </div>
        <FieldEditor selectedField={selectedField} updateField={updateField} />
      </div>
    </div>
  );
}
