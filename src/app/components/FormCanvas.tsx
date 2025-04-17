'use client';

import { FormField } from '../../types/form';

const FormCanvas = ({
    fields,
    handleDrop,
    selectedFieldId,
    setSelectedFieldId,
}: {
    fields: FormField[]; // An array of form fields passed as a prop.
    handleDrop: (e: React.DragEvent) => void; // A function to handle the drop event, passed as a prop.
    selectedFieldId: string | null;
    setSelectedFieldId: (id: string | null) => void;
}) => {
    return (
        <div
            onDragOver={(e) => {
                console.log('drag over');
                e.preventDefault()
            }}
            onDrop={handleDrop}
            className="min-h-[300px] w-2/5 border p-4 space-y-2 rounded-md"
        >
            {fields.length === 0 && ( // Checks if there are no fields to display a message.
                <div className="flex items-center justify-center h-full">
                    <p>Drag fields here</p> {/* Message displayed when no fields are present. */}
                </div>
            )}
            {fields.map((field) => ( // Iterates over each field to render them.
                <div
                    key={field.id} // Unique key for each field.
                    draggable // Makes the field draggable.
                    onClick={() => setSelectedFieldId(field.id)} // highlight selected
                    className={`p-2 border bg-gray-100 cursor-move ${selectedFieldId === field.id ? 'ring-2 ring-blue-500' : ''}`}


                    onDragStart={(e) => e.dataTransfer.setData('removeFieldId', field.id)} // Sets the field ID in the data transfer object when dragging starts.
                >
                    {field.type === 'text' && <div>
                        <label htmlFor={field.id} className='text-black text-sm'>{field.label}</label>
                        <input id={field.id} type="text" className='w-full text-black border-b-2 border-black' />
                    </div>
                    /* Renders a text input if the field type is 'text'. */}

                    {field.type === 'dropdown' &&
                        <div>
                            <label htmlFor={field.id} className='text-black text-sm'>{field.label}</label>
                            <select className="w-full text-black" id={field.id}>
                                {field.options ? field.options?.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                )) : <option value="">Options not set</option>}
                            </select>
                        </div>
                    /* Renders a dropdown select if the field type is 'dropdown'. */}

                    {field.type === 'checkbox' &&
                        <div className="flex items-center gap-2">
                            <input id={field.id} type="checkbox" className="w-4 h-4" />
                            <label htmlFor={field.id} className='text-black'>{field.label}</label>

                        </div>
                    /* Renders a checkbox with a label if the field type is 'checkbox'. */}
                </div>
            ))}
        </div>
    );
};

export default FormCanvas; // Exports the FormCanvas component as the default export.
