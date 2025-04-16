'use client'; // This directive indicates that the component is a client-side component.

const FieldPalette = () => {
    // Function to handle the drag start event and set the data transfer type
    const handleDragStart = (e: React.DragEvent, type: string) => {
        e.dataTransfer.setData('fieldType', type); // Set the type of field being dragged
    };

    return (
        <div className="space-y-2"> {/* Container with vertical spacing between children */}
            {['text', 'dropdown', 'checkbox'].map((type) => (
                <div
                    key={type} // Unique key for each field type
                    draggable // Makes the element draggable
                    onDragStart={(e) => handleDragStart(e, type)} // Attach the drag start event handler
                    className="p-2 border cursor-move rounded-md" // Styling classes
                >
                    {type} field {/* Display the type of field */}
                </div>
            ))}
        </div>
    );
};

export default FieldPalette; // Export the component as the default export
